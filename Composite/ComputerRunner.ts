import {File, Folder} from "./FileSystem";

export class ComputerRunner{
    static main(): void{
        const computer = new Folder("Computer");
        const documents = new Folder("Documents");
        const photos = new Folder("Photos");
        const music = new File("music.mp3");

        const university = new Folder("University");
        university.add(new File("Java.java")).add(new File("Python.py"))

        documents
            .add(new File("resume.pdf"))
            .add(new File("homework.docx"))
            .add(university)

        photos.add(new File("photo1.jpg")).add(new File("photo2.jpg"))

        computer.add(documents).add(photos).add(music)

        computer.show()
    }
}

ComputerRunner.main()
