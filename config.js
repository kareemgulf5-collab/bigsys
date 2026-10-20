/* =====================================================================
   إعداد النظام — EgyGulf Export System config
   1) اعمل مشروع Firebase جديد، وفعّل Authentication (Email/Password) و Firestore.
   2) انسخ firebaseConfig من Project settings > Your apps > Web app وحطه هنا.
   3) حط إيميل المدير (أو أكتر) في adminEmails — وبرضه في ملف firestore.rules.
   لو firebase.apiKey فاضي، النظام بيشتغل "وضع تجريبي" والبيانات بتتحفظ على المتصفح بس.
   ===================================================================== */
window.EGF_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  adminEmails: ["YOUR_ADMIN_EMAIL@example.com"],
  firebaseSdkVersion: "10.12.2"
};
