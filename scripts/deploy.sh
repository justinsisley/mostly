# This values will determine your now.sh hostname
# For example: https://{NOW_SUBDOMAIN}.now.sh
NOW_SUBDOMAIN="mostly"

#
# You generally won't need to change anything below this line unless you begin
# using a custom domain name for your deployment.
#

# Deploy and get the deployment ID
NOW_DEPLOY_ID=$( now --public --no-clipboard --token=$NOW_TOKEN )

# Create an alias with the new deployment ID
now alias $NOW_DEPLOY_ID "$NOW_SUBDOMAIN" --token=$NOW_TOKEN

# Remove any unaliased deployments, and always exit successfully
now rm $APP_NAME --safe --yes --token=$NOW_TOKEN || exit 0