import assert from 'node:assert/strict'
import test from 'node:test'
import fs from 'node:fs'

test('research Article schema uses the on-site Organization for equal author and publisher identities', () => {
  const source = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8')
  assert.match(source, /const organization=\{'@type':'Organization',name:site\.brand,url:base\}/)
  assert.match(source, /author:organization,publisher:organization/)
  assert.doesNotMatch(source, /author:\{'@type':'Organization',name:site\.brand\},citation/)
})