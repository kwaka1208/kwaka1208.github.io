# /bin/sh
docker run -v `pwd`:/srv/jekyll -it --rm -p 4000:4000 jekyll/jekyll bash
