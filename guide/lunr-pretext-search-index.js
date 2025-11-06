var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Section",
  "number": "",
  "title": "Workspace Setup",
  "body": " Workspace Setup  The quickest and easiest way to get started with PreTeXt is through GitHub. Using a GitHub Codespace means you don't need to install anything locally — everything runs in your browser with all dependencies preconfigured. Here's how to set it up:     Create a GitHub Account    Go to GitHub .  Create an account (it's free for individual users).      Import the PreTeXt Codespace Template    Visit the official PreTeXt Codespace repository on GitHub.     Click    and choose    Create a New Repository .    In the new window, fill in:  Repository name  Description — optional.  Visibility — choose Public or Private .  Then click Create repository . GitHub will copy the official PreTeXt codespace into your account as a new repo.       Start Your Codespace    If you weren't automatically redirected, go to your GitHub account and open the new repository you just created.     Click    and open the Codespaces tab.         In this tab, click       The Codespace will begin setting up. This may take a few minutes the first time. When complete, you'll have a fully functional PreTeXt workspace running in your browser.       "
},
{
  "id": "root-1-2-4-3",
  "level": "1",
  "url": "root-1-2-4-3.html",
  "type": "Subsection",
  "number": "",
  "title": "Creating a New Book",
  "body": " Creating a New Book     Creating a New Pretext Project    Hit F1 to open the command palette.  Type pretext .  Scroll down and select PreTeXt: New Project .  Select the type of document you want to create. For this demo, we'll choose book .  Select the location of your project, but the default should be the one you want.       Completing these steps will populate your codespace with all the files you need to author in PreTeXt . In fact, it also provides a template that build right-away.   "
},
{
  "id": "root-1-2-4-4",
  "level": "1",
  "url": "root-1-2-4-4.html",
  "type": "Subsection",
  "number": "",
  "title": "Your First Build",
  "body": " Your First Build     Building A Pretext Book     Locate the ▷ PreTeXt button on the bottom tool bar.      To build the book, select Build default target .  The default is the html version of the book. Let's also build a pdf version of the book as well.  Click on the ▷ PreTeXt button and select Build Another Target followed by the print option.  The results of both of these builds should now be in the output folder.       "
},
{
  "id": "root-1-2-4-5",
  "level": "1",
  "url": "root-1-2-4-5.html",
  "type": "Subsection",
  "number": "",
  "title": "Viewing the Output",
  "body": " Viewing the Output     Viewing A Pretext Book    Now, we can view both the html and pdf version of the template book.  To view them, click on the ▷ PreTeXt button again and select View Full Document then choose either the web or print option.  In either case, a new broswer window should open. If the html doesn't display in the broswer, try refreshing the page.       "
},
{
  "id": "root-1-2-5",
  "level": "1",
  "url": "root-1-2-5.html",
  "type": "Section",
  "number": "",
  "title": "Having A Look Around",
  "body": " Having A Look Around  Once your Codespace loads, you'll see a ready-to-use PreTeXt project folder. You could begin writing immediately, but before doing so it's helpful to understand the structure and purpose of the key folders and files.   Notable Folders & Files     source  This folder contains your PreTeXt document files. Typically separated by chapter or section, plus a main.ptx file, which pulls them together.    output  The output folder is automatically generated when you build your project and contains the final product, ready to view or publish. You don't edit anything here.    assets  A general-purpose folder for supporting materials like images, data files, videos, etc. When you reference these in your source, PreTeXt includes them automatically.        project.ptx  The central configuration file that describes your entire project. This is where you specify the formats you want to generate and what files are needed to build them.    main.ptx  The entry point of your PreTeXt document that ties together all chapters or sections. It's like the table of contents of your project.    publication.ptx  This settings file that contains all the visual knobs for customizing the output of your documents.      "
},
{
  "id": "talk-demo-third-party-apps",
  "level": "1",
  "url": "talk-demo-third-party-apps.html",
  "type": "Subsection",
  "number": "",
  "title": "Third-Party Apps",
  "body": " Third-Party Apps   Embedded Interactives    GeoGebra     Desmos     Google Maps    "
},
{
  "id": "talk-demo-reading-questions",
  "level": "1",
  "url": "talk-demo-reading-questions.html",
  "type": "Subsection",
  "number": "",
  "title": "Reading Questions",
  "body": " Reading Questions   ✔ True\/False   True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.      ✔ Multiple-Choice   Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?     ✔ Matching  Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                               ✔ Clickable-Area   Integration by Parts   Click on the correct integration by parts formula.                      ✔ Fill-in-the-Blank   Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()        ✔ Interactive Coding  See how the code below counts the number of digits in an integer.   num = 569 nDigits = 0 print(f\"How many digits are in the integer {num}\") temp = num while temp > 1: temp = temp\/10 nDigits = nDigits + 1 print(f\" temp={temp}\") print(f\"{num} has {nDigits} digits\")   If your book is on Runestone server, you can also include questions. Here is an example: CodeLens with questions .    ✔ Coding with Datasets  You can import datasets as a csv, txt, or even hardcoded, like so:   1850 -0.37 2.24E-7 1860 -0.34 3.94E-7 1870 -0.28 6.6E-7 1880 -0.24 1.10 1890 -0.42 1.72 1900 -0.20 2.38 1910 -0.49 3.34 1920 -0.25 4.01 1930 -0.14 4.53 1940 +0.01 5.50 1950 -0.17 6.63 1960 -0.05 10.5 1970 -0.03 16.0 1980 +0.09 20.3 1990 +0.30 22.6 2000 +0.29 24.9 2010 +0.56 32.7 2019 +0.74 33.3   This data can be used in a code-block for coding and\/or interaction.   ccfile = open(\"ccdata1.txt\", \"r\") print(\"Years with increasing avg. temp\") print(\"YEAR △ TEMP(°C) CO2 (gigatons)\") for aline in ccfile: values = aline.split() if float(values[1]) > 0: print(f\"{values[0]} {values[1]} {values[2]}\") ccfile.close()    "
},
{
  "id": "vector-space-dimension",
  "level": "2",
  "url": "talk-demo-reading-questions.html#vector-space-dimension",
  "type": "Checkpoint",
  "number": "1",
  "title": "True\/False.",
  "body": " True\/False   Every vector space has finite dimension.    The vector space of all polynomials with finite degree has a basis, , which is infinte.   "
},
{
  "id": "multiple-choice-not-randomized",
  "level": "2",
  "url": "talk-demo-reading-questions.html#multiple-choice-not-randomized",
  "type": "Checkpoint",
  "number": "2",
  "title": "Multiple-Choice, Not Randomized, One Answer.",
  "body": " Multiple-Choice, Not Randomized, One Answer   What color is a stop sign?      Green    Green means go! .      Red    Red is universally used for prohibited activities or serious warnings.      White    White might be hard to see.     What did you see last time you went driving?  Maybe go out for a drive?  "
},
{
  "id": "lt-common-transforms-prereading-questions-1",
  "level": "2",
  "url": "talk-demo-reading-questions.html#lt-common-transforms-prereading-questions-1",
  "type": "Checkpoint",
  "number": "3",
  "title": "Exponential Integration Rules.",
  "body": "Exponential Integration Rules   Match each function of with its antiderivative. Assume is a constant.                            "
},
{
  "id": "lt-derivative-transfer-prereading-questions-2",
  "level": "2",
  "url": "talk-demo-reading-questions.html#lt-derivative-transfer-prereading-questions-2",
  "type": "Checkpoint",
  "number": "4",
  "title": "Integration by Parts.",
  "body": " Integration by Parts   Click on the correct integration by parts formula.                   "
},
{
  "id": "ex-demo-jscmp-primes",
  "level": "2",
  "url": "talk-demo-reading-questions.html#ex-demo-jscmp-primes",
  "type": "Checkpoint",
  "number": "5",
  "title": "Fill-In, Prime less then 20.",
  "body": " Fill-In, Prime less then 20   What is an example of a prime number less than 20?       [2, 3, 5, 7, 11, 13, 17, 19].includes(Number(ans))   Any number from the list is a prime number less than 20.     function(){ const val=Number(ans); if (val <= 0) { return \"You need to give a positive integer.\" } if (val >= 20) { return \"The integer must be less than 20.\" } for (let i=2; i<=3; i++) { if (val % i == 0) { return `Your answer is composite since it is divisible by ${i}.` } } return false; }()     "
},
{
  "id": "talk-demo-authored-interactives",
  "level": "1",
  "url": "talk-demo-authored-interactives.html",
  "type": "Subsection",
  "number": "",
  "title": "Authored (Advanced)",
  "body": " Authored (Advanced)   DoenetML -->      JSXGraph        "
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
