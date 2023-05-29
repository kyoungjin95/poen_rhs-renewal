function loadPage(url) {
  const content = document.getElementById('content');

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Failed to load page: ${url}`);
      }
    })
    .then((html) => {
      content.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
      content.innerHTML = `<p>오류가 발생했습니다. 페이지를 로드할 수 없습니다.</p>`;
    });
}

