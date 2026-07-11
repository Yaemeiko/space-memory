import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section
      id="letter"
      className="min-h-screen flex items-center justify-center px-6 bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
      >
        <h2 className="mb-6 text-4xl font-bold">Untukmu ❤️</h2>

        <p className="leading-8 text-slate-300">
          Hai Moon...
          <br /><br />
         Aku telah berhenti mencoba menjadi langit lain agar terlihat indah di matamu.
         <br /><br />
Kini aku memilih menjadi diriku sendiri—dengan segala luka yang perlahan sembuh, dengan segala kekurangan yang terus kubenahi, dan dengan hati yang masih belajar mencintai tanpa harus kehilangan jati diri.
<br /><br />

Aku sadar, cinta seharusnya tidak mengubah seseorang menjadi orang lain. Cinta seharusnya membuat seseorang pulang pada dirinya sendiri.
<br /><br />
Dan sekarang... aku sudah pulang.
<br /><br />
Namun, ada satu hal yang masih menetap di dalam semestaku.
<br /><br />
Itu adalah harapan... bahwa suatu hari nanti, kita bisa kembali.
<br /><br />
Di alam semesta, ada bintang yang cahayanya baru tiba setelah jutaan tahun perjalanan. Ketika kita melihatnya, bisa jadi bintang itu telah berubah, tetapi cahayanya tetap datang dengan setia. Begitulah perasaanku. Mungkin waktunya terlambat, mungkin jalannya terlalu panjang, tetapi ketulusannya tetap bergerak menuju hatimu.
<br /><br />
Kamu pernah menjadi dunia yang membuat seluruh galaksiku terasa hidup. Saat kamu pergi, rasanya seperti matahari yang tiba-tiba menghilang dari tata suryanya. Semua masih ada, tetapi tak lagi terasa hangat.
<br /><br />
Meski begitu, aku tidak ingin menjadi komet yang hanya datang sesaat lalu menghilang. Aku ingin menjadi bintang yang tetap bersinar, meski tak selalu terlihat. Tetap ada, tanpa memaksa untuk dipandang.
<br /><br />
Jika semesta memang masih menyimpan cerita tentang kita, biarlah gravitasi yang bekerja. Sebab benda-benda langit tidak pernah saling mengejar. Mereka tetap berada di jalannya masing-masing, lalu dipertemukan oleh tarikan yang tak terlihat.
<br /><br />
Aku pun begitu.
<br /><br />
Aku tidak ingin memaksamu kembali. Aku hanya ingin, jika suatu hari takdir mempertemukan kita lagi, kamu akan menemukan seseorang yang telah selesai berdamai dengan dirinya sendiri. Seseorang yang tidak lagi mencintaimu karena takut kehilangan, tetapi karena memang memilihmu, setiap hari, dengan hati yang utuh.
<br /><br />
Sebab sejauh apa pun dua planet berpisah, selama mereka masih berada dalam semesta yang sama, selalu ada kemungkinan untuk kembali menemukan orbit yang saling melengkapi.
<br /><br />
Dan jika hari itu benar-benar datang...
<br /><br />
Aku ingin kita tidak sekadar bertemu lagi.
<br /><br />
Aku ingin kita pulang.
<br /><br />
Pulang ke tempat yang dulu kita sebut "kita", bukan sebagai dua orang yang dipaksa oleh masa lalu, tetapi sebagai dua jiwa yang telah bertumbuh, saling memilih, dan percaya bahwa cinta yang tulus tidak pernah benar-benar hilang.
<br /><br />
Karena di antara miliaran bintang yang memenuhi alam semesta, hatiku masih mengenal satu koordinat yang sama.
<br /><br />
Yaitu... kamu.

          <br /><br />
          MOON,WORLD,FUTURE
        </p>
        <p className="mt-6 text-right text-slate-400">
        </p>
      </motion.div>
    </section>
  );
}
