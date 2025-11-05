var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Section",
  "number": "1",
  "title": "Workspace Setup",
  "body": " Workspace Setup  The quickest and easiest way to get started with PreTeXt is through GitHub. Using a GitHub Codespace means you don't need to install anything locally — everything runs in your browser with all dependencies preconfigured. Here's how to set it up:     Create a GitHub Account    Go to GitHub .  Create an account (it's free for individual users).      Import the PreTeXt Codespace Template    Visit the official PreTeXt Codespace repository on GitHub.     Click    and choose    Create a New Repository .    In the new window, fill in:  Repository name  Description — optional.  Visibility — choose Public or Private .  Then click Create repository . GitHub will copy the official PreTeXt codespace into your account as a new repo.       Start Your Codespace    If you weren't automatically redirected, go to your GitHub account and open the new repository you just created.     Click    and open the Codespaces tab.         In this tab, click       The Codespace will begin setting up. This may take a few minutes the first time. When complete, you'll have a fully functional PreTeXt workspace running in your browser.       "
},
{
  "id": "root-1-2-4",
  "level": "1",
  "url": "root-1-2-4.html",
  "type": "Section",
  "number": "2",
  "title": "A Minimal Project",
  "body": " A Minimal Project   Once your Codespace loads, it'll will look like so:   It's ready for PreTeXt , but it needs a few files first. If you click on the README.md and scroll down to Creating a New Project , you'll find some directions for initiating a PreTeXt project.    Creating a New Book     Creating a New Pretext Project    Hit F1 to open the command palette.  Type pretext .  Scroll down and select PreTeXt: New Project .  Select the type of document you want to create. For this demo, we'll choose book .  Select the location of your project, but the default should be the one you want.       Completing these steps will populate your codespace with all the files you need to author in PreTeXt . In fact, it also provides a template that build right-away.     Your First Build     Building A Pretext Book     Locate the ▷ PreTeXt button on the bottom tool bar.      To build the book, select Build default target .  The default is the html version of the book. Let's also build a pdf version of the book as well.  Click on the ▷ PreTeXt button and select Build Another Target followed by the print option.  The results of both of these builds should now be in the output folder.         Viewing the Output     Viewing A Pretext Book    Now, we can view both the html and pdf version of the template book.  To view them, click on the ▷ PreTeXt button again and select View Full Document then choose either the web or print option.  In either case, a new broswer window should open. If the html doesn't display in the broswer, try refreshing the page.        "
},
{
  "id": "root-1-2-5",
  "level": "1",
  "url": "root-1-2-5.html",
  "type": "Section",
  "number": "3",
  "title": "Having A Look Around",
  "body": " Having A Look Around  Once your Codespace loads, you'll see a ready-to-use PreTeXt project folder. You could begin writing immediately, but before doing so it's helpful to understand the structure and purpose of the key folders and files.   Notable Folders & Files     source  This folder contains your PreTeXt document files. Typically separated by chapter or section, plus a main.ptx file, which pulls them together.    output  The output folder is automatically generated when you build your project and contains the final product, ready to view or publish. You don't edit anything here.    assets  A general-purpose folder for supporting materials like images, data files, videos, etc. When you reference these in your source, PreTeXt includes them automatically.        project.ptx  The central configuration file that describes your entire project. This is where you specify the formats you want to generate and what files are needed to build them.    main.ptx  The entry point of your PreTeXt document that ties together all chapters or sections. It's like the table of contents of your project.    publication.ptx  This settings file that contains all the visual knobs for customizing the output of your documents.      "
},
{
  "id": "root-1-2-6",
  "level": "1",
  "url": "root-1-2-6.html",
  "type": "Section",
  "number": "4",
  "title": "Your First Build",
  "body": " Your First Build  Now that you’ve explored the workspace, it’s time to build your first PreTeXt document. The template repository already includes a complete working example, so you can test the build process immediately.   Building the Web Version    In your Codespace, open the integrated terminal (at the bottom of the editor).  Type the following command and press Enter : pretext build web    The build process will begin. You’ll see messages as PreTeXt processes your source files, applies templates, and generates HTML in the output\/web folder.   When the build completes, you’ll see a message indicating success. The generated files can be previewed directly in the browser.    This command produces a full-featured, navigable website with automatic numbering, cross-references, and MathJax-rendered equations.    Previewing Your Output    In the Codespace file explorer, expand the output folder.  Open the web subfolder, then right-click on index.html .  Choose Preview → Preview in Editor to view it directly inside your Codespace tab, or select Open in Browser for a full window view.    You should now see a professional, interactive web page version of your document complete with a table of contents, equations, and styled sections.    Building a PDF (Optional)    To generate a PDF version, use the following command:  pretext build pdf   This will run a LaTeX-based build to produce a typeset PDF. The result will appear in output\/pdf\/ .     The PDF build may take a bit longer, especially the first time it downloads LaTeX packages.    What’s Happening Behind the Scenes  When you run a build, PreTeXt uses your publication.ptx file to decide:  Which outputs to generate (HTML, PDF, EPUB, etc.)  How to apply templates, styling, and metadata  Where to place the results (usually in output\/<format>\/ )    Because everything is defined structurally rather than visually, your math, examples, and exercises automatically appear with consistent numbering and styling across all outputs.    Quick Recap   pretext build web — generates a navigable HTML version of your document.  pretext build pdf — creates a typeset print version (optional).  Outputs appear inside the output\/ folder — no manual file management required.  All formatting, numbering, and linking are handled automatically by PreTeXt .   You now have a working build process and a functional document. In the next section, we’ll explore how to edit content and customize your project.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
