# This value will determine your now.sh hostname
# For example: https://{NOW_SUBDOMAIN}.now.sh
# https://zeit.co/docs/getting-started/assign-a-domain-name
NOW_SUBDOMAIN="mostly"

# These values will determine how your application auto-scales
# https://zeit.co/docs/getting-started/scaling
MIN_INSTANCES=1
MAX_INSTANCES=1

# This value will determine the regions your application will deploy to
# https://zeit.co/docs/features/scaling#scaling-while-deploying
REGIONS="sfo"

#
# You generally won't need to change anything below this line unless you begin
# using a custom domain name for your deployment
#

# Deploy and get the deployment ID
NOW_DEPLOY_ID=$( now --public --no-clipboard --regions=$REGIONS --token=$NOW_TOKEN )

# Create an alias with the new deployment ID
now alias $NOW_DEPLOY_ID "$NOW_SUBDOMAIN" --token=$NOW_TOKEN

# Remove any unaliased deployments
now rm $NOW_SUBDOMAIN --safe --yes --token=$NOW_TOKEN

# Scale the deployment and always exit successfully
now scale "$NOW_SUBDOMAIN.now.sh" $MIN_INSTANCES $MAX_INSTANCES --token=$NOW_TOKEN || exit 0