'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function GsapInitializer() {
  const pathname = usePathname()

  useEffect(() => {
    // We only want this to run on the client after GSAP has loaded.
    // Since GSAP is loaded via script tags in layout, we wait for it.
    if (typeof window === 'undefined' || !(window as any).gsap || !(window as any).ScrollTrigger) {
      const interval = setInterval(() => {
        if ((window as any).gsap && (window as any).ScrollTrigger) {
          clearInterval(interval)
          initGsap()
        }
      }, 100)
      return () => clearInterval(interval)
    } else {
      initGsap()
    }

    function initGsap() {
      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      // Refresh ScrollTrigger on every navigation to avoid dead triggers
      ScrollTrigger.refresh();

      /* ── Hero entrance: badge clips in, then chars fly up ── */
      const tl = gsap.timeline({defaults:{ease:'power3.out'}});
      
      if (document.getElementById('heroBadge')) {
        tl.to('#heroBadge', {clipPath:'inset(0 0% 0 0)', duration:.7, delay:.1});
      }
      
      const h1 = document.getElementById('heroH1');
      if (h1 && !h1.dataset.split) {
        h1.dataset.split = 'true';
        const splitChars = (el: Node) => {
          el.childNodes.forEach(node=>{
            if(node.nodeType===3){
              const txt=node.textContent || '';
              const frag=document.createDocumentFragment();
              txt.split('').forEach(ch=>{
                const s=document.createElement('span');
                s.className='char';
                s.textContent=ch==='  '?' ':ch;
                if(ch===' ') s.style.display='inline';
                frag.appendChild(s);
              });
              if(node.parentNode) node.parentNode.replaceChild(frag,node);
            } else if(node.nodeType===1 && (node as HTMLElement).id !== 'scrT' && (node as HTMLElement).tagName!=='BR'){
              splitChars(node);
            }
          });
        };
        splitChars(h1);
      }

      const chars = h1 ? h1.querySelectorAll('.char') : [];
      if (chars.length > 0) {
        const isMobile = window.innerWidth <= 640;
        tl.to(chars,{
          opacity:1,y:0,rotateX:0,
          duration:isMobile ? .04 : .06,
          ease:'power2.out',
          stagger:isMobile ? .015 : .025
        },'-=.3');
      }

      if (document.getElementById('heroSub')) {
        tl.to('#heroSub',  {opacity:1,y:0,duration:.7},'-=.2');
      }
      if (document.getElementById('heroCtas')) {
        tl.to('#heroCtas', {opacity:1,y:0,duration:.6},'-=.5');
      }
      if (document.getElementById('heroMeta')) {
        tl.to('#heroMeta', {opacity:1,y:0,duration:.6},'-=.45');
      }

      /* ── Orb scroll parallax ── */
      gsap.to('.orb-1',{y:-80,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:2}});
      gsap.to('.orb-2',{y:60, ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:3}});

      /* ── Section title parallax (content moves, BG stays fixed) ── */
      if (window.innerWidth > 768) {
        gsap.utils.toArray('.section-title').forEach((el: any)=>{
          gsap.fromTo(el,{y:40},{y:-25,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.8}});
        });
      }

      /* ── sa-up: fade + fly up ── */
      gsap.utils.toArray('.sa-up').forEach((el: any, i: number)=>{
        gsap.to(el,{
          opacity:1,y:0,duration:.8,ease:'power3.out',
          scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'},
          delay:(i%4)*.1
        });
      });

      /* ── sa-left / sa-right ── */
      gsap.utils.toArray('.sa-left').forEach((el: any, i: number)=>{
        gsap.to(el,{opacity:1,x:0,duration:.85,ease:'power3.out',
          scrollTrigger:{trigger:el,start:'top 86%',toggleActions:'play none none none'},delay:i*.1});
      });
      gsap.utils.toArray('.sa-right').forEach((el: any)=>{
        gsap.to(el,{opacity:1,x:0,duration:.9,ease:'power3.out',
          scrollTrigger:{trigger:el,start:'top 82%',toggleActions:'play none none none'}});
      });

      /* ── sa-scale: spring pop ── */
      gsap.utils.toArray('.sa-scale').forEach((el: any, i: number)=>{
        gsap.to(el,{opacity:1,scale:1,duration:.8,ease:'back.out(1.6)',
          scrollTrigger:{trigger:el,start:'top 86%',toggleActions:'play none none none'},delay:i*.1});
      });

      /* ── sa-rot: 3D flip in (simplified on mobile) ── */
      const isMobile = window.innerWidth <= 640;
      gsap.utils.toArray('.sa-rot').forEach((el: any, i: number)=>{
        gsap.to(el,{
          opacity:1,
          rotateX:0,
          y:0,
          duration: isMobile ? .5 : .75,
          ease:'power2.out',
          scrollTrigger:{trigger:el,start: isMobile ? 'top 92%' : 'top 88%',toggleActions:'play none none none'},
          delay: isMobile ? 0 : (i%3)*.1
        });
      });

      /* ── Pricing cards stagger ── */
      ScrollTrigger.create({trigger:'.pricing-grid',start:'top 82%',onEnter:()=>{
        gsap.to('.price-card',{opacity:1,y:0,scale:1,duration:.7,ease:'back.out(1.4)',stagger:.15});
      }});

      /* ── Testi cards stagger ── */
      ScrollTrigger.create({trigger:'.testi-grid',start:'top 82%',onEnter:()=>{
        gsap.to('.testi-card',{opacity:1,y:0,duration:.7,ease:'power2.out',stagger:.15});
      }});

      /* ── CTA card dramatic entrance ── */
      ScrollTrigger.create({trigger:'.cta-card',start:'top 80%',onEnter:()=>{
        gsap.to('.cta-card',{opacity:1,scale:1,duration:1,ease:'elastic.out(1,.65)'});
      }});

      /* ── Stat pills parallax drift ── */
      gsap.utils.toArray('.stats-row').forEach((row: any, i: number)=>{
        gsap.fromTo(row,{x:i%2===0?0:-100},{x:i%2===0?-80:80,ease:'none',
          scrollTrigger:{trigger:'.stats-strip',start:'top bottom',end:'bottom top',scrub:2}});
      });

      /* ═══════════════════════════════════════════
        FEAT CARD MOUSE SPOTLIGHT
      ═══════════════════════════════════════════ */
      document.querySelectorAll('.feat-card').forEach(card=>{
        (card as HTMLElement).addEventListener('mousemove',e=>{
          const r=card.getBoundingClientRect();
          (card as HTMLElement).style.setProperty('--mx',(e.clientX-r.left)+'px');
          (card as HTMLElement).style.setProperty('--my',(e.clientY-r.top)+'px');
        },{passive:true});
      });

      /* ═══════════════════════════════════════════
        MAGNETIC BUTTON (desktop)
      ═══════════════════════════════════════════ */
      if(window.innerWidth>640){
        document.querySelectorAll('.btn-primary,.btn-cta-wa').forEach(btn=>{
          (btn as HTMLElement).addEventListener('mousemove',e=>{
            const r=btn.getBoundingClientRect();
            const bx=e.clientX-r.left-r.width/2;
            const by=e.clientY-r.top-r.height/2;
            gsap.to(btn,{x:bx*.25,y:by*.25,duration:.3,ease:'power2.out'});
          },{passive:true});
          (btn as HTMLElement).addEventListener('mouseleave',()=>{
            gsap.to(btn,{x:0,y:0,duration:.6,ease:'elastic.out(1,.5)'});
          });
        });
      }

      /* ═══════════════════════════════════════════
        SCRAMBLE — locked width, no layout shift
      ═══════════════════════════════════════════ */
      const CHARS='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
      const FINAL='in 48 Hours';
      const scEl=document.getElementById('scrT');
      let busy=false,scTmr: any=null;

      function scramble(dur: number){
        if(busy || !scEl)return;
        busy=true;
        clearInterval(scTmr);
        let f=0,total=Math.round(dur/28);
        scTmr=setInterval(()=>{
          scEl.textContent=FINAL.split('').map((c,i)=>{
            if(c===' ')return ' ';
            return(f/total>i/FINAL.length)?c:CHARS[Math.floor(Math.random()*CHARS.length)];
          }).join('');
          if(++f>=total){
            scEl.textContent=FINAL;
            clearInterval(scTmr);
            setTimeout(()=>{busy=false;},400);
          }
        },28);
      }

      setTimeout(()=>scramble(950),700);
      if(scEl) {
        scEl.addEventListener('mouseenter',()=>scramble(700));
        scEl.addEventListener('touchstart',()=>scramble(700),{passive:true});
      }
    }
  }, [pathname])

  return null
}
