# This value will determine your now.sh hostname
# For example: https://{NOW_SUBDOMAIN}.now.sh
# https://zeit.co/docs/getting-started/assign-a-domain-name
NOW_SUBDOMAIN="mostly"

# These values will determine how your application auto-scales
# https://zeit.co/docs/getting-started/scaling
MIN_INSTANCES=1
MAX_INSTANCES=1

#
# You generally won't need to change anything below this line unless you begin
# using a custom domain name for your deployment or
#

# Deploy and get the deployment ID
NOW_DEPLOY_ID=$( now --public --no-clipboard --token=$NOW_TOKEN )

# Create an alias with the new deployment ID
now alias $NOW_DEPLOY_ID "$NOW_SUBDOMAIN" --token=$NOW_TOKEN

# Scale the deployment
now scale "$NOW_SUBDOMAIN.now.sh" $MIN_INSTANCES $MAX_INSTANCES

# Remove any unaliased deployments, and always exit successfully
now rm $NOW_SUBDOMAIN --safe --yes --token=$NOW_TOKEN || exit 0