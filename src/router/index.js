import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { layout: "Default" },
      component: Home,
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
      path: "/your-cart",
      name: "YourCart",
      meta: { layout: "Default" },
      component: () => import("../pages/YourCart.vue"),
    },
    {
      path: "/dispensaries",
      name: "Dispensaries",
      meta: { layout: "dispensariesDefault" },
      component: () => import("../pages/Dispensaries.vue"),
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
      path: "/products",
      name: "Products",
      meta: { layout: "Default" },
      component: () => import("../pages/Products.vue"),
    },
    {
      path: "/deals",
      name: "Deals",
      meta: { layout: "Default" },
      component: () => import("../pages/Deals.vue"),
    },
    {
      path: "/learn",
      name: "Learn",
      meta: { layout: "Default" },
      component: () => import("../pages/Learn.vue"),
    },
    {
      path: "/strains",
      name: "Strains",
      meta: { layout: "Default" },
      component: () => import("../pages/Strains.vue"),
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
      meta: { layout: "Default" },
      component: () => import("../pages/AccountSetting.vue"),
    },
  ],
});

export default router;