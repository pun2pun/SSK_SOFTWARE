
var fs = require("fs")
var docx = require("docx");
const { Table } = require("docx");

// Create document
const doc = new docx.Document();

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
function Build_File(FileName,Detail){

    doc.addSection({
        properties: {},
        children: [
            new docx.Paragraph({
                alignment: docx.AlignmentType.CENTER,
                children: [
                    new docx.TextRun({
                        text: "รายละเอียดโครงการ/กิจกรรม ปีงบประมาณ " + Detail.data.year_project,
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                alignment: docx.AlignmentType.CENTER,
                children: [
                    new docx.TextRun({
                        text: "โรงเรียนสตรีสิริเกศ",
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                alignment: docx.AlignmentType.CENTER,
                children: [
                    new docx.TextRun({
                        text: "(งานพัฒนาตามกลยุทธ์)",
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                alignment: docx.AlignmentType.CENTER,
                children: [
                    new docx.TextRun({
                        text: "…………………………………………………………………",
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "1. ความสอดคล้อง",
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "      ยุทธศาสตร์ประเทศ ยุทธศาสตร์ที่	"+Detail.data.strategyInfo.country_strategy +"		ยุทธศาสตร์ สพฐ.ยุทธศาสตร์ที่ " +Detail.data.strategyInfo.spt_strategy,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "มาตรฐานการศึกษาโรงเรียน มาตรฐานที่ "+Detail.data.strategyInfo.school_standard+ "	 ตัวบ่งชี้ที่ "+Detail.data.strategyInfo.indicator+"    ตัวชี้วัดที่ "+Detail.data.strategyInfo.Metric	,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "กลยุทธ์ของโรงเรียน  กลยุทธ์ที่ " +Detail.data.strategyInfo.School_strategy+  "	โครงการหลักที่	"+Detail.data.strategyInfo.Main_project+" 	กิจกรรมหลักที่	"+Detail.data.strategyInfo.Main_activities,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "2. ลักษณะของโครงการ "+Detail.data.property_project,
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "3. ชื่อโครงการ / กิจกรรม  "+Detail.name_project,
                        bold: true,                       
                    })
                ],
           
            }),
            
    
   

  new docx.Table({
        rows: [
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("สาระสำคัญ")],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph("ตัวชี้วัดความสำเร็จ/เป้าหมาย")],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph("เงื่อนไขความสำเร็จ")],
                    }),
                ],
            }),
        
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("จุดมุ่งหมาย (Goal)") , new docx.Paragraph(Detail.data_detail.goal.body)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.goal.Success_Indicators)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.goal.Success_conditions)],
                    }),
                ]
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("วัตถุประสงค์(Purpose)") , new docx.Paragraph(Detail.data_detail.purpose.body)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.purpose.Success_Indicators)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.purpose.Success_conditions)],
                    }),
                    
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("ผลผลิต/ผลงาน (Output)") , new docx.Paragraph(Detail.data_detail.output.body)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.output.Success_Indicators)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.output.Success_conditions)],
                    }),
                    
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("กิจกรรม  (Activities)") , new docx.Paragraph(Detail.data_detail.activities.body)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.activities.Success_Indicators)],
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(Detail.data_detail.activities.Success_conditions)],
                    }),
                    
                ],
            }),
            new docx.TableRow({
                children: [
                            new docx.TableCell({
                                children: [new docx.Paragraph("ปัจจัย  (Input)") , new docx.Paragraph(Detail.data_detail.input.body)],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph(Detail.data_detail.input.Success_Indicators)],
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph(Detail.data_detail.input.Success_conditions)],
                            }),       
                         ]
                             })
        ]}),


            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "หลักฐานแหล่งพิสูจน์",
                        bold: true,                       
                    })
                ],
            }),
            new docx.Paragraph({
               
                children: [
                    new docx.TextRun({
                        text: "แหล่งข้อมูล",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text:"--แหล่งข้อมูล--",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "วิธีการประเมิน",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: Detail.data_detail_2.Proof_of_evidence.Assessment_method,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
               
                children: [
                    new docx.TextRun({
                        text: "เครื่องมือ",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: Detail.data_detail_2.Proof_of_evidence.tools,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "งบประมาณ  (ระบุที่มางบประมาณ เช่น เงินอุดหนุน)",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
               
                children: [
                    new docx.TextRun({
                        text: Detail.data_detail_2.Proof_of_evidence.Budget,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "ระยะเวลาดำเนินการ",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "เริ่มต้น :"+Detail.data_detail_2.Proof_of_evidence.Processing_time.Start+"  "+"สิ้นสุด"+Detail.data_detail_2.Proof_of_evidence.Processing_time.End,
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: "ผู้รับผิดชอบ",
                        bold: false,                       
                    })
                ],
            }),
            new docx.Paragraph({
                
                children: [
                    new docx.TextRun({
                        text: Detail.data_detail_2.Proof_of_evidence.Responsible_person,
                        bold: false,                       
                    })
                ],
            }),
            
        ]
        });



    docx.Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("./views/storeFile/"+FileName+".docx", buffer);
    });

    
}
// Used to export the file into a .docx file

module.exports = Build_File;