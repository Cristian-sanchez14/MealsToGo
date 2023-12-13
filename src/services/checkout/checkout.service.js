import createStripe from "stripe-client"

const stripe = createStripe(
  "pk_test_51MYvhVJdzcHxDUvhKYlWrpRSB4Cqva3VbmnuFWISTtVPa7B30px2sFb9t6QH2LVurHsW8WkKJNwYfFbWn29MBvhL00ZGHd9iwn"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });