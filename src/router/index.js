import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "AgeVerification",
      component: () => import("../pages/AgeVerification.vue"),
    },
    {
      path: "/index",
      name: "Home",
      meta: { layout: "Default" },
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/sign-in",
      name: "Sign-In",
      component: () => import("../pages/Sign-In.vue"),
    },
    {
      path: "/sign-up",
      name: "Sign-Up",
      component: () => import("../pages/Sign-Up.vue"),
    },
    {
      path: "/forget-password",
      name: "ForgetPassword",
      component: () => import("../pages/ForgetPassword.vue"),
    },
    {
      path: "/reset-password",
      name: "resetPassword",
      component: () => import("../components/layout/auth/resetPassword.vue"),
      meta: {
        requiresOTP: true,
      },
    },
    {
      path: "/your-cart",
      name: "YourCart",
      meta: { layout: "Default" },
      component: () => import("../pages/YourCart.vue"),
    },
    {
      path: "/empty-cart",
      name: "EmptyCart",
      meta: { layout: "Default" },
      component: () => import("../pages/EmptyCart.vue"),
    },

    {
      path: "/check-out",
      name: "CheckOut",
      meta: { layout: "Default" },
      component: () => import("../pages/CheckOut.vue"),
    },
    {
      path: "/check-out-thanks",
      name: "CheckOutThankYou",
      meta: { layout: "Default" },
      component: () => import("../pages//CheckOutThankYou.vue"),
    },
    {
      path: "/dispensaries",
      name: "Dispensaries",
      meta: { layout: "dispensariesDefault" },
      component: () => import("../pages/Dispensaries.vue"),
    },
    {
      path: "/dispensaries-detail:id",
      name: "ShopDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/ShopDetail.vue"),
      props: true,
    },
    {
      path: "/product-detail:id",
      name: "ProductDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/ProductDetial.vue"),
      props: true,
    },
    {
      path: "/not-found",
      name: "NotFoundProduct",
      // meta: { layout: "Default" },
      component: () => import("../pages/NotFoundProduct.vue"),
    },
    {
      path: "/deliveries",
      name: "Deliveries",
      meta: { layout: "Default" },
      component: () => import("../pages/Deliveries.vue"),
    },
    {
      path: "/brands",
      name: "Brands",
      meta: { layout: "Default" },
      component: () => import("../pages/Brands.vue"),
    },
    {
      path: "/brands-detail:id",
      name: "BrandsDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/BrandsDetail.vue"),
    },
    {
      path: "/stores-for-selling-brand",
      name: "StoresSellingBrand",
      meta: { layout: "Default" },
      component: () => import("../pages/StoresSellingBrandProducts.vue"),
    },
    {
      path: "/products",
      name: "Products",
      meta: { layout: "Default" },
      component: () => import("../pages/Products.vue"),
      props: true,
    },
    {
      path: "/deals",
      name: "Deals",
      meta: { layout: "Default" },
      component: () => import("../pages/Deals.vue"),
    },
    {
      path: "/deals:id",
      name: "DealsDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/DealsDetail.vue"),
    },
    {
      path: "/learn",
      name: "Learn",
      meta: { layout: "Default" },
      component: () => import("../pages/Learn.vue"),
    },
    {
      path: "/learn:id",
      name: "LearnDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/LearnDetail.vue"),
    },
    {
      path: "/learn-product:id",
      name: "LearnProductDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/LearnProductDetail.vue"),
    },
    {
      path: "/strains",
      name: "Strains",
      meta: { layout: "Default" },
      component: () => import("../pages/Strains.vue"),
    },
    {
      path: "/strain-prouduct:id",
      name: "StrainsProduct",
      meta: { layout: "Default" },
      component: () => import("../pages/StrainProductDetail.vue"),
    },
    {
      path: "/careers",
      name: "Careers",
      meta: { layout: "Default" },
      component: () => import("../pages/Careers.vue"),
    },
    {
      path: "/job-detail",
      name: "JobDetail",
      meta: { layout: "Default" },
      component: () => import("../pages/JobDetail.vue"),
    },
    {
      path: "/apply-job",
      name: "ApplyForJobs",
      meta: { layout: "Default" },
      component: () => import("../pages/ApplyForJobs.vue"),
    },
    {
      path: "/post-a-job",
      name: "PostAJob",
      meta: { layout: "Default" },
      component: () => import("../pages/PostAJob.vue"),
    },
    {
      path: "/faq",
      name: "Faqs",
      meta: { layout: "Default" },
      component: () => import("../pages/Faqs.vue"),
    },
    {
      path: "/about-us",
      name: "About Us",
      meta: { layout: "Default" },
      component: () => import("../pages/AboutUs.vue"),
    },
    {
      path: "/los-angeles",
      name: "Los Angeles",
      meta: { layout: "dispensariesDefault" },
      component: () => import("../pages/LosAngeles.vue"),
    },
    {
      path: "/terms-of-use",
      name: "Terms",
      meta: { layout: "Default" },
      component: () => import("../pages/Terms.vue"),
    },
    {
      path: "/commercial-terms-of-use",
      name: "CommercialTerms",
      meta: { layout: "Default" },
      component: () => import("../pages/CommercialTerms.vue"),
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      meta: { layout: "Default" },
      component: () => import("../pages/PrivacyPolicy.vue"),
    },
    {
      path: "/account-setting",
      name: "AccountSetting",
      meta: { layout: "Default", requiresAuth: true },
      component: () => import("../pages/AccountSetting.vue"),
    },
    {
      path: "/business-account",
      name: "BusinessAccount",
      meta: { layout: "Default" },
      component: () => import("../pages/BusinessAccount.vue"),
    },
    {
      path: "/my-orders",
      name: "MyOrder",
      meta: { layout: "Default" },
      component: () => import("../pages/MyOrder.vue"),
    },
    {
      path: "/my-orders-details:id",
      name: "MyOrderDetails",
      meta: { layout: "Default" },
      component: () => import("../pages/MyOrderDetails.vue"),
      props: true,
    },
    {
      path: "/add-your-listing",
      name: "AddYourListings",
      meta: { layout: "Default" },
      component: () => import("../pages/AddYourListing.vue"),
    },
    {
      path: "/my-review",
      name: "MyReview",
      meta: { layout: "Default" },
      component: () => import("../pages/MyReview.vue"),
    },
    {
      path: "/help",
      name: "Help",
      meta: { layout: "Default" },
      component: () => import("../pages/Help.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const ageVerified = localStorage.getItem("ageVerified");
  if(ageVerified === "true" && to.name === "AgeVerification"){
    next({name: "Home"});
  } else if (!ageVerified && to.name !== "AgeVerification") {
    next({ name: "AgeVerification" });
  } else if (to.meta.requiresAuth) {
    const userEmail = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userEmail="));
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="));

    if (userEmail && userId) {
      next();
    } else {
      next({ name: "Sign-In" });
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresOTP) {
    if (localStorage.getItem("correctOTP:")) {
      next();
    } else {
      next("sign-in");
    }
  } else {
    next();
  }
});
export default router;
