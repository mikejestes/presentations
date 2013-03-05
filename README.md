mikejestes.github.com/presentations/
====================================

Archive of presentations I've given.

## Deploy

1. Place secret details in `_jekyll_s3.yml` by running `jekyll-s3` to generate blank config.
1. Prepare or create bucket by runnig `configure-s3-website --config-file _jekyll_s3.yml`
1. Deploy site to s3 by running `jekyll-s3`
