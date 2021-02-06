const main = async (document: Document) => {
  const result = await fetch('/api/test').then(r => r.json())
  const testElement = document.getElementById('test')
  if (testElement && result.success) {
    testElement.innerText = 'Test passed :)'
  }
}

main(document)