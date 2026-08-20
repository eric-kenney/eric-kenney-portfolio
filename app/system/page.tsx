'use client';

import { useState } from 'react';

type Step = 'input' | 'review' | 'generating' | 'results';

interface GeneratedAssets {
  messaging_framework: string;
  sales_battlecard: string;
  product_webpage: string;
}

export default function SystemPage() {
  const [step, setStep] = useState<Step>('input');
  const [product, setProduct] = useState('');
  const [strategy, setStrategy] = useState('');
  const [plan, setPlan] = useState('');
  const [results, setResults] = useState<GeneratedAssets | null>(null);
  const [error, setError] = useState('');
  const [generatingStep, setGeneratingStep] = useState(0);

  const handleGenerate = () => {
    if (!product.trim() || !strategy.trim() || !plan.trim()) {
      setError('All fields required');
      return;
    }
    setError('');
    setStep('review');
  };

  const handleConfirm = async () => {
    setStep('generating');
    setError('');
    setGeneratingStep(0);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product, strategy, plan }),
      });

      if (!response.ok) throw new Error('Generation failed');
      const data = await response.json();

      setTimeout(() => setGeneratingStep(1), 800);
      setTimeout(() => setGeneratingStep(2), 1600);
      setTimeout(() => {
        setGeneratingStep(3);
        setResults(data);
        setStep('results');
      }, 2400);
    } catch (err) {
      setError('Error generating assets');
      setStep('input');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  // Input step
  if (step === 'input') {
    return (
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px', marginBottom: '60px' }}>
          <div className="label">MARKETING ASSET GENERATOR</div>
          <div>
            <h1 style={{ marginBottom: '20px' }}>Generate your launch assets</h1>
            <p style={{ fontSize: '17px', lineHeight: '1.65', color: '#444141', maxWidth: '60ch' }}>
              Describe your launch. Answer three questions. We'll create a messaging framework, sales battlecard, and product webpage.
            </p>
          </div>
        </div>

        {error && <div style={{ background: '#fee', color: '#c00', padding: '16px', marginBottom: '32px', border: '1px solid #fcc' }}>{error}</div>}

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div></div>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#201e1d' }}>
                Product name and description
              </label>
              <textarea
                value={product}
                onChange={e => setProduct(e.target.value)}
                className="input"
                placeholder="e.g., CloudSync - Real-time data sync platform for distributed teams"
                style={{ minHeight: '90px' }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#201e1d' }}>
                Launch strategy and positioning
              </label>
              <textarea
                value={strategy}
                onChange={e => setStrategy(e.target.value)}
                className="input"
                placeholder="What's your positioning? Who's the buyer? What problem does this solve?"
                style={{ minHeight: '90px' }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#201e1d' }}>
                Launch plan and go-to-market
              </label>
              <textarea
                value={plan}
                onChange={e => setPlan(e.target.value)}
                className="input"
                placeholder="How will you go to market? Key milestones? Target audience?"
                style={{ minHeight: '90px' }}
              />
            </div>

            <button onClick={handleGenerate} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Generate assets →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Review step
  if (step === 'review') {
    return (
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
        <button
          onClick={() => setStep('input')}
          style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginBottom: '40px' }}
        >
          ← Back
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div className="label">REVIEW & CONFIRM</div>
          <div>
            <h1 style={{ marginBottom: '40px' }}>Your launch brief</h1>

            <div style={{ background: '#f8f4f4', border: '2px solid #201e1d', padding: '28px', marginBottom: '40px' }}>
              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '2px solid rgba(32, 30, 29, 0.4)' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#7d7979', marginBottom: '8px' }}>PRODUCT</div>
                <p style={{ margin: '0', fontSize: '15px', color: '#201e1d' }}>{product}</p>
              </div>

              <div style={{ marginBottom: '28px', paddingBottom: '28px', borderBottom: '2px solid rgba(32, 30, 29, 0.4)' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#7d7979', marginBottom: '8px' }}>STRATEGY</div>
                <p style={{ margin: '0', fontSize: '15px', color: '#201e1d' }}>{strategy}</p>
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#7d7979', marginBottom: '8px' }}>PLAN</div>
                <p style={{ margin: '0', fontSize: '15px', color: '#201e1d' }}>{plan}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={() => setStep('input')} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                Back
              </button>
              <button onClick={handleConfirm} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                Generate →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Generating step
  if (step === 'generating') {
    return (
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div className="label">GENERATING</div>
          <div>
            <h1 style={{ marginBottom: '40px' }}>Creating your assets</h1>

            <div style={{ space: '24px' }}>
              {[
                { label: 'Messaging framework', desc: 'Positioning, messaging pillars, audience messaging' },
                { label: 'Sales battlecard', desc: 'Discovery questions, objection handling, talk tracks' },
                { label: 'Product webpage', desc: 'Hero, problem narrative, value prop, CTAs' }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: generatingStep > i ? '#f8f4f4' : '#eae9e9',
                    border: '2px solid #201e1d',
                    padding: '16px 20px',
                    marginBottom: '12px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'start'
                  }}
                >
                  <div style={{ fontSize: '20px', flex: '0 0 auto' }}>
                    {generatingStep > i ? '✓' : generatingStep === i ? '⟳' : '○'}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#201e1d' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: '#7d7979' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results step
  if (step === 'results' && results) {
    return (
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '80px 40px' }}>
        <button
          onClick={() => {
            setStep('input');
            setProduct('');
            setStrategy('');
            setPlan('');
            setResults(null);
          }}
          style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginBottom: '40px' }}
        >
          ← Start over
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px', marginBottom: '60px' }}>
          <div className="label">YOUR ASSETS</div>
          <h1 style={{ margin: '0' }}>Ready to use</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '48px' }}>
          <div></div>
          <div style={{ maxWidth: '800px' }}>
            {[
              { label: 'MESSAGING FRAMEWORK', title: 'Your positioning & messaging', content: results.messaging_framework },
              { label: 'SALES BATTLECARD', title: 'Discovery & objection guide', content: results.sales_battlecard },
              { label: 'PRODUCT WEBPAGE', title: 'Customer-facing copy', content: results.product_webpage }
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: '40px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#2563eb', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {item.label}
                </div>
                <h3 style={{ marginBottom: '8px' }}>{item.title}</h3>
                <div style={{ background: '#eae9e9', border: '1px solid rgba(32, 30, 29, 0.4)', padding: '16px', marginBottom: '16px', maxHeight: '200px', overflow: 'auto', fontSize: '13px', lineHeight: '1.6', color: '#444141' }}>
                  {item.content.substring(0, 400)}...
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => copyToClipboard(item.content)} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                    Copy
                  </button>
                  <button className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                    View full
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}