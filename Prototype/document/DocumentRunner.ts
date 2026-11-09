import {Document} from "./Document";
import {DocumentFactory} from "./DocumentFactory";

export class DocumentRunner{
    static main(): void{
        const original = new Document(
            1,
            "Shartnoma loyihasi",
            "Ushbu hujjat tomonlar o'rtasidagi kelishuv shartlarini belgilaydi.",
            "Aziz",
            ["huquqiy", "loyiha"],
        );

        const factory = new DocumentFactory(original)

        console.log("2-nusxa yaratildi")
        const document2 = factory.cloneDocument()

        document2.setId(2)
        document2.setTitle("Gulla Yashna xur Özbekiston")
        document2.setContent("Özbekiston tengdur Özbekistonga")
        document2.setAuthor("Mehriddin")
        document2.setTags(["Free", "Independent"])


        console.log("3-nusxa yaratildi")
        const document3  = factory.cloneDocument()
        document3.setId(3)
        document3.setTitle("Coding forever")
        document3.setTitle("IA can't  replace coders")
        document3.setAuthor("Developers community")
        document3.setContent("Some title")
        document3.setTags(["AI","DEV"])


        console.log("\n Nusxalar o'zgartirildi:");
        console.log("   nusxa #1: " + document2.toString());
        console.log("   nusxa #2: " + document3.toString());

        console.log("\n Original hali ham o'zgarmagan:");
        console.log("   " + original.toString());
    }
}

DocumentRunner.main()