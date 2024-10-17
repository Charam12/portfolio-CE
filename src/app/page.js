import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-3/4 m-auto space-y-4 p-4">
        <div className="flex justify-between py-4 px-8 items-center bg-slate-300 rounded-3xl">
          <div className="w-2/4 space-y-2">
            <h5 className="font-bold text-3xl italic underline uppercase">Introduce My Self</h5>
            <p className="text-sm">
              สวัสดีครับ ผมชื่อนายชานนท์ จำปากุล กำลังศึกษาอยู่คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ชั้นปีที่ 2 มีประสบการณ์ทำงาน
              ในการทำงานในตำแหน่ง Full-Stack Developer 1 ปี เคยทำทั้งการ Deploy และวางโครงสร้าง Database ด้วยต้นเอง ผ่านการทำโปรเจคจริง
              มามากกว่า 4 โปรเจคที่ใช้สำหรับการทำงานในระดับ Production
            </p>
          </div>
          <Image src={'https://img2.pic.in.th/pic/received_701195751809836.jpeg'} width={200} height={200} alt="Profile Image" className="rounded-xl"/>
        </div>
      </div>
    </>
  );
}
