
HTML
====

Tags
----

1. Write a basic template for an HTML document that you can use as a starting
   point for your own work. Make a repo of it that you can clone easily.
   Update it when you find out things that you want to start with.

   DONE

2. Pick a very short newspaper article from any online newspaper and write an
   HTML page with the content from it. Use the tags ``article``, ``nav``,
   ``section``, ``header`` and ``footer``. If there are elements for which
   you don't have a tag, use the ``class`` attribute, and apply ``id``s
   to identify specific elements.

   DONE

   Open the page on a browser:
   * Can we distinguish the tags on the screen?
      - Es posible distinguir las etiquetas h1 , h2, h3, el párrafo, el nav, en cambio, section, article, header y footer, no se pueden apreciar
   * Why do we need tags like ``article`` or ``section``?
      - Es la forma correcta de estructurar la página web, es muy importante la utilización de estas etiquetas ya que facilitan que los algoritmos de los motores de búsqueda localizen y posicionen el sitio correctamente.

3. Write an HTML file to show the following table:

   | Concept    | Tags                                                                |
   |------------|---------------------------------------------------------------------|
   | Text Level | ``p``, ``em``, ``strong``, ``a``                                    |
   | Sections   | ``body``, ``article``, ``section``, ``nav``, ``header``, ``footer`` |
   | Images     | ``img``                                                             |
   | Lists      | ``ul``, ``ol``, ``li``                                              |
   | Tables     | ``table``, ``thead``, ``tbody``, ``tr``, ``th``, ``td``             |

   DONE

The browser inspector
---------------------

1. Go to the [Google](https://google.com) page and answer the following:
   * Find the logo on the inspector. What is the ``alt`` text in it?

         <img alt="Google"...>

   * Is the search box an ``input`` element?

         <input class="gLFyf gsfi"...>

   * What type of element is the microphone icon in the search bar?

         *No he localizado el microfono, en su lugar, he identificado la lupa de búsqueda:
         <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>

   * Does Google use a ``footer`` element on the bottom and if not, what is it?

      - No usa `footer` elemento, usa en su lugar, un `div`


2. Download the image used in [this degree page](https://www.talent.upc.edu/cat/estudis/formacio/curs/313400/postgrau-full-stack-web-technologies/)
   as background.

   <img src="https://www.talent.upc.edu/uploads/curriculums/imatges_activitat/313400_1.jpg">

3. Go to the ["Why Choose React" page](https://www.quora.com/Why-choose-React) 
   on Quora on a browser and from there navigate to other pages. At some
   point Quora shows a login box (*"By continuing, I agree that I am..."*)
   and behind it the article you were trying to see is visible but the text is
   blurred. (Damn!)

   No problem, we will get rid of it. Inspect the HTML and delete the dialog
   (find the element which corresponds to it), and later look for the ``div``
   that has the content (as of this writing it has the class
   "``ContentWrapper``") and look for the CSS ``filter`` property with the
   "blur" and uncheck it to make the text readable. Yay!
   
   <img src="img/1.png">
   <img src="img/2.png">
   <img src="img/3.png">
   <img src="img/4.png">

4. Go to 
   [this Minidosis page](http://www.minidosis.org/#/actividades/Cpp.Funciones.Binomial.doc), 
   and check how much text it has. Now look at the HTML code of the page (Ctrl+U)
   and search with Ctrl+F for pieces of the text you have seen. What is going
   on? How can you explain it?

   - El texto no aparece en el documento HTML, se utiliza JavaScript para modificar el DOM y añadir el texto de la página.


The browser console
-------------------

1. By using the ``document`` object in the browser console, show an array of all
   links in some page you like (a short one preferably). If you dare, try to use
   Javascript to change the background color of all links to yellow.

   - Se ha utilizado la página de login del campus virtual de la UPC https://atenea-tfe.upc.edu/login/index.php :

   <img src="img/5.png">
   <img src="img/6.png">
   <img src="img/7.png">



Forms
-----

1. Make an HTML page with a search box that does searches on 
   [GitHub](http://github.com). Go to GitHub to determine the URL of
  searches and look for the parameter used in searches (you can deduce it from
  the URL). Configure the form to use that parameter and URL.

2. Write a form to register a user with the following data: name, lastname, age,
   username, password, and country. The form has the target URL
   ``http://backend.cia.gov`` and should use a ``POST`` method.

3. Write a form to configure a restaurant menu. The menu should have 5 options
   for the first dish, and 5 more for the second (use ``select`` elements), as
   well as 3 for different desserts. (Use invented dishes for some fun.) Add a
   checkbox that requests coffee after dessert.

4. Add the last exercise to a repository and now introduce the following
   modification (for which you will do a special commit): Change the select
   elements to *radio buttons* so that the whole menu is visible all the time
   and you only mark what dishes you want.

DOM APIs
--------

1. Open a page that you use often and list on the developer console the URLs of
   all the links found on the page (hint: use ``document.links``).

2. Open a page that you use often and show a list on the developer console of
   the URLs of all images in the page.


Mini-projects
-------------

1. Find a Word (or LibreOffice) document that you have worked on recently
   (preferably relatively short but with tables, images, lists, etc.). Rewrite
   it in HTML (try to match the style but not necessarily too close). Print a
   copy of the document with the browser. Realize how the web platform is a kind
   of Word/LibreOffice or "typesetting system". Compare the size of the original
   document with the size of the HTML file. Compare the ease with which you can
   distribute this file (and know for sure that the receiver will be able to
   see it) with Word/LibreOffice.

 