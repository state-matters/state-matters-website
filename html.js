export default ({ title, styles, body }) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112946294-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-112946294-1');
  </script>
  <title>${title}</title>
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png">
  <meta name="theme-color" content="#F37E5A">
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script async src="https://d2n4tvy2wsd0oo.cloudfront.net/widget/common/1.3/funraise.min.js"></script>
  <script async defer src="/bundle.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Martel:200,300|Poppins:300,400,500,700">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.4.85/css/materialdesignicons.min.css">
  ${styles}
</head>
<body>
<div id="root">${body}</div>
</body>
</html>
`
