/* eslint-disable react-hooks/exhaustive-deps, @next/next/no-img-element, react/no-unescaped-entities */
'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/utils/supabase/client'

// ─────────────────────────────────────────────
// AUTH SHELL
// ─────────────────────────────────────────────
export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg)' }}>
        <div style={{ color: 'var(--a2)', fontSize: '1rem' }}>Loading…</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--bg)', padding: '1rem' }}>
        <div style={{
          maxWidth: '420px', width: '100%', padding: '3rem 2.5rem',
          background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)',
          borderRadius: '20px', backdropFilter: 'blur(16px)'
        }}>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text)', textAlign: 'center', marginBottom: '.5rem' }}>
            Admin Login
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', textAlign: 'center', marginBottom: '2rem' }}>
            Zyrox Labs Portfolio CMS
          </p>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
              style={iStyle} required />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
              style={iStyle} required />
            {error && <div style={{ color: '#ff5f57', fontSize: '.85rem', textAlign: 'center' }}>{error}</div>}
            <button type="submit" disabled={loading}
              style={{ marginTop: '.5rem', padding: '13px', borderRadius: '9px', background: 'var(--a)', color: '#fff', border: 'none', fontFamily: 'var(--fh)', fontSize: '.95rem', fontWeight: 600, cursor: 'pointer' }}>
              {loading ? 'Logging in…' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <DashboardView onLogout={handleLogout} />
}

// ─────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────
function DashboardView({ onLogout }: { onLogout: () => void }) {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingProject, setEditingProject] = useState<any>(null)
  const supabase = createClient()

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    setProjects(data || [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchProjects() }, [fetchProjects])

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project? This cannot be undone.')) return
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  return (
    <div style={{ padding: '100px 5% 80px', maxWidth: '1100px', margin: '0 auto', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--fh)', fontSize: '2rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            Portfolio CMS
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: '4px' }}>
            {projects.length} project{projects.length !== 1 ? 's' : ''} in database · Static works always shown on site
          </p>
        </div>
        <div style={{ display: 'flex', gap: '.75rem' }}>
          <button onClick={() => setEditingProject({})}
            style={{ padding: '10px 22px', borderRadius: '9px', background: 'var(--a)', color: '#fff', border: 'none', fontFamily: 'var(--fh)', fontSize: '.9rem', fontWeight: 600, cursor: 'pointer' }}>
            + Add Project
          </button>
          <button onClick={onLogout}
            style={{ padding: '10px 22px', borderRadius: '9px', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--border)', fontFamily: 'var(--fh)', fontSize: '.9rem', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </div>

      {/* Modal Editor */}
      {editingProject && (
        <ProjectEditor
          project={editingProject}
          onClose={() => setEditingProject(null)}
          onSave={() => { setEditingProject(null); fetchProjects() }}
        />
      )}

      {/* Project List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--muted)' }}>Loading projects…</div>
      ) : projects.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📂</div>
          <p>No projects added yet. Click <strong style={{ color: 'var(--a2)' }}>+ Add Project</strong> to get started.</p>
          <p style={{ fontSize: '.8rem', marginTop: '.5rem' }}>The 6 static works on the site are always visible and don't need to be added here.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {projects.map(p => (
            <div key={p.id} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr auto',
              gap: '1.25rem', alignItems: 'center',
              background: 'var(--surface)', padding: '1.2rem 1.5rem',
              borderRadius: '14px', border: '1px solid var(--border)'
            }}>
              {/* Thumbnail */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '10px', overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(99,102,241,.15), rgba(167,139,250,.08))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                {p.image_url
                  ? <img src={p.image_url} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  : <span style={{ fontSize: '1.5rem' }}>🌐</span>
                }
              </div>
              {/* Info */}
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontFamily: 'var(--fh)', color: 'var(--text)', fontSize: '1rem', fontWeight: 600, margin: '0 0 4px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '4px' }}>{p.category} · {p.industry}</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: '.75rem', color: 'var(--a2)', textDecoration: 'none' }}>
                    {p.link}
                  </a>
                )}
              </div>
              {/* Actions */}
              <div style={{ display: 'flex', gap: '.6rem', flexShrink: 0 }}>
                <button onClick={() => setEditingProject(p)}
                  style={{ padding: '8px 18px', borderRadius: '8px', background: 'rgba(99,102,241,.12)', color: 'var(--a2)', border: '1px solid rgba(99,102,241,.25)', fontFamily: 'var(--fh)', fontSize: '.82rem', fontWeight: 500, cursor: 'pointer' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(p.id)}
                  style={{ padding: '8px 18px', borderRadius: '8px', background: 'rgba(255,95,87,.08)', color: '#ff5f57', border: '1px solid rgba(255,95,87,.25)', fontFamily: 'var(--fh)', fontSize: '.82rem', fontWeight: 500, cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// PROJECT EDITOR MODAL
// ─────────────────────────────────────────────
function ProjectEditor({ project, onClose, onSave }: { project: any, onClose: () => void, onSave: () => void }) {
  const isNew = !project.id
  const [formData, setFormData] = useState({
    title: project.title || '',
    industry: project.industry || '',
    category: project.category || '',
    description: project.description || '',
    link: project.link || '',
    image_url: project.image_url || ''
  })
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const set = (key: string, val: string) => setFormData(prev => ({ ...prev, [key]: val }))

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    if (!isNew) {
      await supabase.from('projects').update(formData).eq('id', project.id)
    } else {
      await supabase.from('projects').insert([formData])
    }
    setSaving(false)
    onSave()
  }

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)
      if (!event.target.files || event.target.files.length === 0) return
      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from('portfolio').upload(filePath, file)
      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('portfolio').getPublicUrl(filePath)
      set('image_url', data.publicUrl)
    } catch (err: any) {
      alert('Upload failed: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  const removeImage = () => set('image_url', '')

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
      <div style={{
        background: '#070710', padding: '2rem 2.5rem', borderRadius: '20px',
        width: '100%', maxWidth: '620px', border: '1px solid var(--border)',
        maxHeight: '92vh', overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontFamily: 'var(--fh)', color: 'var(--text)', fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>
            {isNew ? '+ Add New Project' : 'Edit Project'}
          </h2>
          <button onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1, padding: '4px' }}>
            ×
          </button>
        </div>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
          <label style={lStyle}>Project Title *</label>
          <input required style={iStyle} placeholder="e.g. Sri Mahaveer Jain Pashu Seva Kendra"
            value={formData.title} onChange={e => set('title', e.target.value)} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '.75rem' }}>
            <div>
              <label style={lStyle}>Industry *</label>
              <input required style={iStyle} placeholder="e.g. NGO, Fashion, Tech"
                value={formData.industry} onChange={e => set('industry', e.target.value)} />
            </div>
            <div>
              <label style={lStyle}>Category *</label>
              <input required style={iStyle} placeholder="e.g. NGO Website"
                value={formData.category} onChange={e => set('category', e.target.value)} />
            </div>
          </div>

          <label style={{ ...lStyle, marginTop: '.75rem' }}>Description *</label>
          <textarea required style={{ ...iStyle, minHeight: '90px', fontFamily: 'inherit', resize: 'vertical' } as any}
            placeholder="Brief description of the project and its impact..."
            value={formData.description} onChange={e => set('description', e.target.value)} />

          <label style={{ ...lStyle, marginTop: '.75rem' }}>Website URL *</label>
          <input required style={iStyle} placeholder="https://example.com"
            value={formData.link} onChange={e => set('link', e.target.value)} />

          {/* Image Section */}
          <label style={{ ...lStyle, marginTop: '.75rem' }}>Project Image</label>
          <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', background: 'rgba(255,255,255,.02)' }}>
            {formData.image_url ? (
              <div>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
                  <img src={formData.image_url} alt="Preview"
                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
                  <button type="button" onClick={removeImage}
                    style={{ position: 'absolute', top: '-8px', right: '-8px', width: '22px', height: '22px', borderRadius: '50%', background: '#ff5f57', border: 'none', color: '#fff', fontSize: '.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    ×
                  </button>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '.8rem', margin: 0 }}>Image uploaded ✓ — click × to remove and upload a different one.</p>
              </div>
            ) : (
              <div>
                <input type="file" accept="image/*" onChange={uploadImage} disabled={uploading}
                  style={{ color: 'var(--muted)', fontSize: '.85rem', display: 'block', marginBottom: '.75rem' }} />
                {uploading
                  ? <p style={{ color: 'var(--a2)', fontSize: '.82rem', margin: 0 }}>⬆ Uploading image…</p>
                  : <p style={{ color: 'var(--muted)', fontSize: '.78rem', margin: 0 }}>Supports JPG, PNG, WebP. Shown as a square on the portfolio page.</p>
                }
              </div>
            )}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <button type="button" onClick={onClose}
              style={{ padding: '11px 24px', borderRadius: '9px', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--border)', fontFamily: 'var(--fh)', fontSize: '.9rem', cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit" disabled={saving || uploading}
              style={{ padding: '11px 28px', borderRadius: '9px', background: 'var(--a)', color: '#fff', border: 'none', fontFamily: 'var(--fh)', fontSize: '.9rem', fontWeight: 600, cursor: 'pointer', opacity: (saving || uploading) ? .6 : 1 }}>
              {saving ? 'Saving…' : isNew ? 'Add Project' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Shared styles
const iStyle: React.CSSProperties = {
  padding: '11px 14px', borderRadius: '8px',
  background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)',
  color: 'var(--text)', fontFamily: 'var(--fh)', fontSize: '.9rem',
  width: '100%', marginBottom: '.75rem', outline: 'none'
}

const lStyle: React.CSSProperties = {
  display: 'block', fontSize: '.78rem', fontWeight: 600,
  letterSpacing: '.04em', color: 'var(--muted)', marginBottom: '6px',
  textTransform: 'uppercase'
}
