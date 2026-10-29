/* =====================================================================
   إعداد النظام — EgyGulf Export System config
   1) اعمل مشروع Firebase جديد، وفعّل Authentication (Email/Password) و Firestore.
   2) انسخ firebaseConfig من Project settings > Your apps > Web app وحطه هنا.
   3) حط إيميل المدير (أو أكتر) في adminEmails — وبرضه في ملف firestore.rules.
   لو firebase.apiKey فاضي، النظام بيشتغل "وضع تجريبي" والبيانات بتتحفظ على المتصفح بس.
   ===================================================================== */
window.EGF_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDsQhArNDAabkL6caSv48Y_RTfRhhNA82M",
    authDomain: "bigsys-c4db8.firebaseapp.com",
    projectId: "bigsys-c4db8",
    storageBucket: "bigsys-c4db8.firebasestorage.app",
    messagingSenderId: "39727898386",
    appId: "1:39727898386:web:7592a968eee8f43a7dddcb"
  },
  adminEmails: ["kareemgulf5@gmail.com"],
  firebaseSdkVersion: "10.12.2"
};
