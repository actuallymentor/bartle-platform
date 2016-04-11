$webroot='/var/www/thesis'
$gitrepossh='repo@repo.git'
$domain=''
$nginx_pagespeed_cache='/var/ngx_pagespeed_cache/$domain'

ssh root@$domain "cd $webroot; git pull; rm -rf $nginx_pagespeed_cache; sudo chown -R www-data:www-data *; find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \; ls -la; service nginx restart;"