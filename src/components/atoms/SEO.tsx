import { Helmet } from 'react-helmet';

type SEOProps = {
  url?: string;
  title?: string;
  image?: string;
  description?: string;
};

const SEO = ({ url, title, description, image }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='google-site-verification' content='P9xLRN_gkqMD5mNlmXDmTAdOJZOXWk-efvPfiABO338' />
      <meta name='naver-site-verification' content='9ae8eb02f2eb031c1bb76597981ff0cca07e9d06' />
      <html lang='ko' />
    </Helmet>
  );
};

export default SEO;
