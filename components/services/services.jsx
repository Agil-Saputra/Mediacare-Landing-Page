import Card from "./card";

export default function services({ data }) {
  return (
    <section id="layanan" className="md:mb-36 mb-10 mt-8">
      <div className="my-10">
        <h2 className="h2">Semua Layanan Kami</h2>
        <p className="p">
          Jasa Inti Solusi Sukses mempunyai banyak layanan untuk kebutuhan mu,
          Berikut 3 Layanan yang paling sering digunakan :
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-[3.75rem]  max-md:px-2">
        {data.map((layanan, i) => {
			const {judulLayanan, deskripsiLayanan, ilustrasiLayanan} = layanan.fields
          return (
            <Card
              key={i}
              icon={'https:' + ilustrasiLayanan.fields.file.url}
              title={judulLayanan}
              desc={deskripsiLayanan}
            />
          );
        })}
      </div>
    </section>
  );
}
