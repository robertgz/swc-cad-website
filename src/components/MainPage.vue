<template>

  <div>
        
    <nav class="navbar navbar-default  navbar-fixed-top cad-navbar" role="navigation">
      <div class="container  nav-bar-st">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand nav-menu-btn" data-scroll href="#top">Computer Aided Design<span class="brand-program"> Program</span></a>
        </div>
        <!-- /.navbar-header-->

        <div class="collapse navbar-collapse spyon" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav" id="">
            <li><a data-scroll class="nav-menu-btn" href="#courses">Courses</a></li>
            <li><a data-scroll class="nav-menu-btn" href="#degrees">Degrees</a></li>
            <li><a data-scroll class="nav-menu-btn" href="#certificates">Certificates</a></li>
            <li class="hidden-sm">
              <a data-scroll class="nav-menu-btn" href="#schedule">Schedule</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="http://www.swccd.edu/">Southwestern College</a></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->

      </div>
      <!-- /.container -->
    </nav>


    <div class="container" id="top">
      <div class="row cad-top-banner">
        <img src="https://dept.swccd.edu/cad/images/header-background-400.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/header-background-400.png 400w,
                    https://dept.swccd.edu/cad/images/header-background-800.png 800w,
                    https://dept.swccd.edu/cad/images/header-background-1200.png 1200w,
                    https://dept.swccd.edu/cad/images/header-background-1700.png 1700w" alt="Rendering of four machine parts designed in computer aided design software.">
      </div>

      <div class="row text-center cad-learn-topics-row">
        <div class="col-xs-12 col-md-3 learn-col">
          <h1 class="learn-heading" role="banner">Learn <br class="learn-br"/>
            <small>
              <span class="banner-part2">Computer Aided Design</span>
              <span class="visible-sm-inline"> and Drafting</span>
              <span class="center-block banner-part4"> CAD</span>
              <span class="visible-xs-block"> at Southwestern College</span>
            </small>        
          </h1>

        </div>
        <div class="col-xs-12 col-md-9 cad-topics-col">
          <ul class="list-inline cad-topics lead">
            <li>2D Drafting</li>
            <li>3D Design</li>
            <li>Dimensioning &amp; Tolerancing</li>
            <li>3D Modeling and Animation</li>
            <li>AutoCAD</li>
            <li>Autodesk Inventor</li>
            <li>SolidWorks</li>
            <li>Revit MEP</li>
            <li>3ds Max</li>
            <li>Maya</li>
            <li>3D Printing</li>
          </ul>
        </div>
      </div>
    </div>
    <!--     container -->

    <div class="container cad-courses-section" id="courses">

      <div class="row text-center">
        <div class="col-xs-12 courses-heading">
          <h2 role="main">CAD Courses</h2>
        </div>
      </div>

      <div class="row course-row" id="cad-220">
        <div class="col-md-6 course-information">
          <h3 class="course-number">CAD 220 
                  <small class="course-title"><br class="course-br" />Introduction to CAD/CAM Systems</small></h3>
          <p class="lead course-overview">Learn 2D Drafting using AutoCAD</p>

          <button type="button" id="CAD-220-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad220-course-description" aria-expanded="false" aria-controls="cad220-course-description">CAD 220 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad220-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> RDG 158 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces the field of computer aided design and drafting (CADD). Provides an overview of the use of personal computers in the development of drawings for engineering-related fields. [D; CSU; UC]</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 course-image">
          <img src="https://dept.swccd.edu/cad/images/toe-stop-details-300.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/toe-stop-details-300.png 300w,
                      https://dept.swccd.edu/cad/images/toe-stop-details-600.png 600w,
                      https://dept.swccd.edu/cad/images/toe-stop-details-900.png 900w,
                      https://dept.swccd.edu/cad/images/toe-stop-details-1200.png 1200w" alt="Multi view dimensioned drawing of two parts drawn using AutoCAD software.">
        </div>
      </div>

      <div class="row course-row" id="cad-222">
        <div class="col-md-6 course-information">
          <h3 class="course-number">CAD 222 
                  <small class="course-title"><br class="course-br" />CAD Mechanical Design I</small></h3>
          <p class="lead course-overview">Learn 3D Mechanical Design using Autodesk Inventor</p>

          <button type="button" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad222-course-description" aria-expanded="false" aria-controls="cad222-course-description">CAD 222 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad222-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 220 or equivalent; RDG 158 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope:</b> Introduces solid modeling using 3D mechanical design software. Covers feature-based design, parametric relationships, and design intent. Emphasizes part modeling using sketches, constraints, dimensions,
                and the model history tree. Additional topics include part drawings, assembly modeling, basic motion, and stress analysis. [D; CSU]</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 course-image">
          <img src="https://dept.swccd.edu/cad/images/u-bracket-300.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/u-bracket-300.png 300w,
                    https://dept.swccd.edu/cad/images/u-bracket-600.png 600w,
                      https://dept.swccd.edu/cad/images/u-bracket-900.png 900w,
                      https://dept.swccd.edu/cad/images/u-bracket-1200.png 1200w" alt="Top, front and shaded view drawing of a machine part designed in 3D using Autodesk Inventor.">
        </div>
      </div>


      <div class="row course-row" id="cad-230">
        <div class="col-md-6 course-information">
          <h3 class="course-number">CAD 230
                  <small class="course-title"><br class="course-br" />Introduction to SolidWorks</small></h3>
          <p class="lead course-overview">Learn 3D Solid Modeling using SolidWorks</p>
          <p class="course-overview">Certified SOLIDWORKS Associate Academic exam available.</p>

          <button type="button" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad230-course-description" aria-expanded="false" aria-controls="cad230-course-description">CAD 230 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad230-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 222 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope:</b> Introduces students to solid modeling using Solidworks software. Provides strategies in the construction and analysis of solid parts and related drawings and assemblies. [D; CSU]</p>
              <div><b>Notes:</b> CAD 230 is articulated with ME 101 at SDSU, effective Fall 2017.</div>
            </div>
          </div>
        </div>

        <div class="col-md-6 course-image">
          <img src="https://dept.swccd.edu/cad/images/crank-case-top-300.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/crank-case-top-300.png 300w,
                      https://dept.swccd.edu/cad/images/crank-case-top-600.png 600w,
                      https://dept.swccd.edu/cad/images/crank-case-top-900.png 900w,
                      https://dept.swccd.edu/cad/images/crank-case-top-1200.png 1200w,
                      https://dept.swccd.edu/cad/images/crank-case-top-1500.png 1500w" alt="Shaded view of a part with a section removed modeled in 3D using SolidWorks.">
        </div>
      </div>

      <div class="row course-row" id="cad-223">
        <div class="col-md-6 course-information">
          <h3 class="course-number">CAD 223 
                  <small class="course-title"><br class="course-br" />CAD Detailing and Dimensioning</small></h3>
          <p class="lead course-overview">Learn Geometric Dimensioning and Tolerancing</p>

          <button type="button" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad223-course-description" aria-expanded="false" aria-controls="cad223-course-description">CAD 223 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad223-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 220 or CAD 222 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope:</b> Constructs a set of completed working drawings. Includes advanced dimensioning functions, geometrical dimensioning and tolerancing (ANSI Y 14.5), and view development from three-dimensional models. [D;
                CSU]
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 course-image">
          <img src="https://dept.swccd.edu/cad/images/hub-drawing-300.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/hub-drawing-300.png 300w,
                      https://dept.swccd.edu/cad/images/hub-drawing-600.png 600w,
                      https://dept.swccd.edu/cad/images/hub-drawing-900.png 900w,
                      https://dept.swccd.edu/cad/images/hub-drawing-1200.png 1200w" alt="Dimensioned drawing of machine part.">
        </div>
      </div>


      <div class="row course-row" id="cad-224">
        <div class="col-md-6 course-information">
          <h3 class="course-number">CAD 224 
                  <small class="course-title"><br class="course-br" />CAD Mechanical Design II</small></h3>
          <p class="lead course-overview">Apply the skills learned in CAD 223 and previous courses twords design projects</p>

          <button type="button" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad224-course-description" aria-expanded="false" aria-controls="cad224-course-description">CAD 224 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad224-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> CAD 223 or equivalent</div>
              <div><b>Recommended Preparation:</b> RDG 158 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope:</b> Introduces system and part design with an emphasis on organization and development of design projects. [D; CSU]</p>
            </div>
          </div>

        </div>

        <div class="col-md-6 course-image">
          <img src="https://dept.swccd.edu/cad/images/omni-launcher-300.png" class="img-responsive center-block" srcset="https://dept.swccd.edu/cad/images/omni-launcher-300.png 300w,
                      https://dept.swccd.edu/cad/images/omni-launcher-600.png 600w,
                      https://dept.swccd.edu/cad/images/omni-launcher-900.png 900w" alt="Rendering of a project designed by a student in CAD 224 using SolidWorks.">
        </div>
      </div>

    </div>

    <!--     container -->
    <div class="container cad-revised-courses-section" id="revised-courses">
      <div class="row text-center">
        <div class="col-xs-12 revised-courses-heading">
          <h2 role="main">Revised CAD Courses</h2>
        </div>
      </div>

      <div class="row course-row" id="cad-228">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 228 
            <small class="course-title"><br class="course-br" />CAD Advanced Surface Design</small></h3>
          <p class="lead course-overview">Learn Surface Modeling using Rhinoceros 3D</p>

          <button type="button" id="CAD-228-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad228-course-description" aria-expanded="false" aria-controls="cad228-course-description">CAD 228 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad228-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 220 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces freeform 3D modeling. Covers drawing and editing of curves and surfaces. Includes techniques of building surfaces from curves. Explores curvature and continuity concepts. Covers creating solids
                from multiple surfaces. Includes methods of curve and surface evaluation. [D; CSU]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row course-row" id="cad-272">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 272 
          <small class="course-title"><br class="course-br" />Solid Modeling II</small></h3>
          <p class="lead course-overview">Learn Intermediate Parametric Design using PTC Creo</p>

          <button type="button" id="CAD-272-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad272-course-description" aria-expanded="false" aria-controls="cad272-course-description">CAD 272 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad272-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> ENGR 110 or equivalent</div>
              <p class="course-description"><b>Course Description &amp; Scope: </b>Applies basic solid modeling skills using Creo. Covers techniques of parametric part design. Explores use of dimensions and constraints within the sketcher. Includes creation of part and assembly drawings.
                Covers use of patterns and family tables. [D; CSU]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row course-row" id="cad-276">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 276 
          <small class="course-title"><br class="course-br" />Technical Computer Imaging and Animation I</small></h3>
          <p class="lead course-overview">Learn 3D Modeling using 3ds Max</p>

          <button type="button" id="CAD-276-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad276-course-description" aria-expanded="false" aria-controls="cad276-course-description">CAD 276 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad276-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> ART 192 or equivalent</div>          
              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduction to 3ds Max and development of 3D models and scenes for use in architectural, engineering, film production, game development, and product marketing fields. Covers polygon modeling and the Graphite Modeling Tools. Explores creation of materials using the Slate Material Editor. Includes lighting design and rendering. [D; CSU]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row course-row" id="cad-277">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 277 
          <small class="course-title"><br class="course-br" />Technical Computer Imaging and Animation II</small></h3>
          <p class="lead course-overview">Learn 3D Animation using 3DS Max</p>

          <button type="button" id="CAD-277-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad277-course-description" aria-expanded="false" aria-controls="cad277-course-description">CAD 277 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad277-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 276 or equivalent; CIS 125 or equivalent </div>
              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces 3D animation using 3ds Max for architectural, engineering, film production, game development, multimedia, and product marketing fields. Explores key frame animation techniques, motion paths,
                animation controllers, and building of object hierarchies. Covers output of animation sequences in multiple formats. [D; CSU]</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--     container -->
    <div class="container cad-new-courses-section" id="new-courses">
      <div class="row text-center">
        <div class="col-xs-12 new-courses-heading">
          <h2 role="main">New CAD Courses</h2>
        </div>
      </div>

      <div class="row course-row" id="cad-231">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD-231 
            <small class="course-title"><br class="course-br" />SolidWorks II</small></h3>
          <p class="lead course-overview">Learn Intermediate Solid Modeling using SolidWorks</p>

          <button type="button" id="CAD-231-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad231-course-description" aria-expanded="false" aria-controls="cad231-course-description">CAD 231 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad231-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b>CAD 230 or equivalent</div>

              <p class="course-description"><b>Course Description &amp; Scope: </b>Explores intermediate SolidWorks techniques. Expands on design of parts, assemblies, and drawings. Introduces multi-body parts, top-down assembly design, surface modeling and sheet metal design (Formerly CAD 295C). [D]</p>
            </div>
          </div>
        </div>
      </div>


      <div class="row course-row" id="cad-273">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 273
            <small class="course-title"><br class="course-br" />3D Modeling using Maya</small></h3>
          <p class="lead course-overview">Learn 3D Modeling using Autodesk Maya</p>

          <button type="button" id="CAD-273-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad273-course-description" aria-expanded="false" aria-controls="cad295E-course-description">CAD 273 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad273-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> ART 192 or equivalent</div>

              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces 3D modeling using industry-recognized software used in film production and video game industries. Emphasizes creation of models using polygon and surface modeling techniques. Demonstrates application of materials and textures to models. Covers camera setup for rendering scenes with lights, shading, and environmental effects (Formerly CAD 295E). [D]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row course-row" id="cad-274">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 274
            <small class="course-title"><br class="course-br" />3D Animation Using Maya</small></h3>
          <p class="lead course-overview">Learn 3D Animation using Autodesk Maya</p>

          <button type="button" id="CAD-274-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad274-course-description" aria-expanded="false" aria-controls="cad295E-course-description">CAD 274 - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad274-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>
              <div><b>Recommended Preparation:</b> CAD 273 or equivalent</div>

              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces 3D animation using industry-recognized software used in film production and video game industries. Emphasizes keyframe and motion path animation. Covers animation concepts such as tweening, frame rate, and interpolation. Provides skills to create rendered animations. [D]</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row course-row" id="cad-295D">
        <div class="col-md-12 course-information">
          <h3 class="course-number">CAD 295D 
            <small class="course-title"><br class="course-br" />Revit MEP Fundamentals</small></h3>
          <p class="lead course-overview">Learn Building Information Modeling for Mechanical, Electrical, and Plumbing using Autodesk Revit MEP</p>

          <button type="button" id="CAD-295D-description" class="btn btn-primary btn-lg btn-block cad-course-description-btn" data-toggle="collapse" data-target="#cad295D-course-description" aria-expanded="false" aria-controls="cad295D-course-description">CAD 295D - <br class="course-num-br" />Course Description</button>
          <div class="collapse" id="cad295D-course-description">
            <div class="well cad-course-description">
              <div><b>Units:</b> 3</div>
              <div><b>Prerequisite:</b> none</div>

              <p class="course-description"><b>Course Description &amp; Scope: </b>Introduces Building Information Modeling (BIM) using Autodesk Revit MEP (Mechanical, Electrical, and Plumbing). Teaches concepts/principles of creating 3D parametric models of MEP system from engineering
                design through construction documentation. Introduces students to software and basic HVAC (heating, ventilation, and air conditioning), electrical, and piping/plumbing components that make Autodesk Revit software a powerful and flexible engineering
                modeling tool.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!--     container -->

    <div class="container cad-degrees-section" id="degrees">
      <div class="row cad-degrees-heading-row">
        <h2>Associate in Science Degrees</h2>
      </div>

<div v-for="degree of degreesAS" :key="degree.code">
  <div class="row cad-degrees-row">
    <h3>{{degree.title}} <small class="text-nowrap">(Major Code: {{degree.code}})</small></h3>
      <dl class="dl-horizontal lead">
        <dt>Courses:</dt>
        <div v-for="course of degree.courses" :key="course.code">
          <dd>{{course.code}} <small class="course-title-cr"> - {{course.title}}</small></dd>
        </div>
      </dl>

        <dl v-if="degree.electives" class="dl-horizontal lead">
          <dt>{{degree.electives.length}} Electives:</dt>
            <div v-for="course of degree.electives" :key="course.code">
              <dd>{{course.code}} <small class="course-title-cr"> - {{course.title}}</small></dd>
            </div>
        </dl>

  </div>
</div>


      <div class="row cad-degrees-general-row">
        <p>* To earn an associate degree, additional general education and graduation requirements must be completed.</p>
      </div>
    </div>
    <!-- container -->

    <div class="container cad-certificates-section" id="certificates">
      <div class="row cad-certificates-heading-row">
        <h2>Certificates of Achievement</h2>
      </div>

      <div v-for="certificate of certificatesAchievement" :key="certificate.code">

        <div class="row cad-certificates-row">
          <h3>{{certificate.title}} <small class="text-nowrap">(Major Code: {{certificate.code}})</small></h3>
          <dl class="dl-horizontal lead">
            <dt>Courses:</dt>
            <div v-for="course of certificate.courses" :key="course.code">
              <dd>{{course.code}} <small class="course-title-cr"> - {{course.title}}</small></dd>
            </div>
          </dl>

            <dl v-if="certificate.electives" class="dl-horizontal lead">
              <dt>{{certificate.electives.length}} Electives:</dt>
                <div v-for="course of certificate.electives" :key="course.code">
                  <dd>{{course.code}} <small class="course-title-cr"> - {{course.title}}</small></dd>
                </div>
            </dl>

        </div>

      </div>

      <div class="row cad-certificates-heading-row">
        <h2>Certificates of Proficiency</h2>
      </div>
      <div v-for="certificate of certificatesProficiency" :key="certificate.code">

        <div class="row cad-certificates-row">
          <h3>{{certificate.title}} <small class="text-nowrap">(Major Code: {{certificate.code}})</small></h3>
          <dl class="dl-horizontal lead">
            <dt>Courses:</dt>
            <div v-for="course of certificate.courses" :key="course.code">
              <dd>{{course.code}} <small class="course-title-cr"> - {{course.title}}</small></dd>
            </div>
          </dl>
        </div>

      </div>

    </div>

    <div class="container cad-schedule-section" id="schedule">
      <div class="row ">
        <div class="col-xs-12 schedule-heading">

          <div v-for="term of schedule" :key="term.id">
            <h2 class="text-center">{{term.name}}</h2>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Class and Title</th>
                    <th>Days</th>
                    <th>Times</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="course of term.courses" :key="course.class">
                    <td>{{course.class}} <br><small>{{course.title}}</small></td>
                    <td>{{course.days}}</td>
                    <td>{{course.times}}</td>        
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
      </div>
    </div>


    <div class="container southwestern-college-footer" id="footer" role="contentinfo">
      
    <div class="row text-center">
      <a href="https://twitter.com/SWCCAD?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @SWCCAD</a>
      <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
    </div>
      
      <div class="row text-center">    
        <!--   col-md-9 cad-topics-col   -->
        <div class="col-xs-12 ">
          <ul class="list-inline">
            <!-- <li><a href="http://www.swccd.edu/index.aspx">SWC Home</a></li> -->
            <!-- <li><a href="http://www.swccd.edu/index.aspx?page=2">About SWC</a></li> -->
            <!-- <li><a href="https://www.swccd.edu/admissions-and-financial-aid/index.aspx">Admissions</a></li> -->
            <!-- <li><a href="https://www.swccd.edu/programs-and-academics/index.aspx">Academic Programs</a></li> -->
            <!-- <li><a href="http://www.swccd.edu/index.aspx?page=5">Student Services</a></li> -->
            <!-- <li><a href="https://www.swccd.edu/locations/index.aspx">Schools &amp; Centers</a></li> -->
            <!-- <li><a href="http://www.swccd.edu/index.aspx?page=7">Faculty &amp; Staff</a></li> -->
            <!-- <li><a href="https://www.swccd.edu/about-swc/get-in-touch/index.aspx">Contact Us</a></li> -->
            <!-- <li><a href="http://www.swccd.edu/index.aspx?page=3544">Accessibility</a></li> -->
          </ul>
        </div>

        <div class="col-xs-12">

          <p><a href="http://www.swccd.edu/">Southwestern College</a> is an equal opportunity educator and employer | <a href="http://www.swccd.edu/index.aspx?page=201">Disclaimer</a> | <a href="http://www.swccd.edu/index.aspx?page=33">Directions to SWC</a></p>
          <p>Southwestern College, 900 Otay Lakes Road, Chula Vista, CA 91910. (619) 421-6700</p>
        </div>
      </div>
      <div class="row swc-jaguar-image">
        <div class="col-xs-offset-1 col-xs-4">
          <a href="http://www.swccd.edu/">
            <img class="img-responsive center-block" alt="Responsive image" src="https://dept.swccd.edu/cad/images/swc_logo.png">
          </a>
        </div>
        <div class="col-xs-offset-1 col-xs-4 ">
          <img class="img-responsive center-block" alt="Responsive image" src="https://dept.swccd.edu/cad/images/swc-jaguar-logo.png">
        </div>
      </div>
    </div>
  
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      degreesAS: [
        {
          title: 'Computer Aided Design and Drafting*',
          code: 'A2571',
          courses: [
            {
              code:  'CAD 220',
              title: 'Introduction to CAD/CAM Systems',
            },
            {
              code:  'CAD 222',
              title: 'CAD Mechanical Design I',
            },
            {
              code:  'CAD 230',
              title: 'Introduction to SolidWorks',
            },
            {
              code:  'CAD 223',
              title: 'CAD Detailing and Dimensioning',
            },
            {
              code:  'CAD 224',
              title: 'CAD Mechanical Design II',
            },
            {
              code:  'ENGR 110',
              title: 'Engineering Design and Graphics',
            },
            {
              code:  'MATH 104',
              title: 'Trigonometry',
            },
          ],
          // electives: [],
        },
        {
          title: 'Design Technology*',
          code: 'A2572',
          courses: [
           {
              code:  'ENGR 101',
              title: 'Introduction to Engineering Careers',
            },            
            {
              code:  'ENGR 110',
              title: 'Engineering Design and Graphics',
            },
            {
              code:  'CAD 220',
              title: 'Introduction to CAD/CAM Systems',
            },
            {
              code:  'MATH 104',
              title: 'Trigonometry',
            },
            {
              code:  'CAD 222',
              title: 'CAD Mechanical Design I',
            },
          ],
          electives: [
            {
              code:  'CAD 223',
              title: 'CAD Detailing and Dimensioning',
            },
            {
              code:  'CAD 224',
              title: 'CAD Mechanical Design II',
            },            
          ],
        },
      ],
      certificatesAchievement: [
        {
          title: 'Computer Aided Design and Drafting--Advanced',
          code: 'A2576',
          courses: [
           {
              code:  'CAD 220',
              title: 'Introduction to CAD/CAM Systems',
            },
            {
              code:  'CAD 222',
              title: 'CAD Mechanical Design I',
            },
            {
              code:  'CAD 230',
              title: 'Introduction to SolidWorks',
            },
            {
              code:  'CAD 223',
              title: 'CAD Detailing and Dimensioning',
            },
            {
              code:  'CAD 224',
              title: 'CAD Mechanical Design II',
            },
            {
              code:  'ENGR 110',
              title: 'Engineering Design and Graphics',
            },
            {
              code:  'MATH 104',
              title: 'Trigonometry',
            },            
          ],
        },
        {
          title: 'Design Technology',
          code: 'A2577',
          courses: [
           {
              code:  'ENGR 101',
              title: 'Introduction to Engineering Careers',
            },            
            {
              code:  'ENGR 110',
              title: 'Engineering Design and Graphics',
            },
            {
              code:  'CAD 220',
              title: 'Introduction to CAD/CAM Systems',
            },
            {
              code:  'MATH 104',
              title: 'Trigonometry',
            },
            {
              code:  'CAD 222',
              title: 'CAD Mechanical Design I',
            },
          ],
          electives: [
            {
              code:  'CAD 223',
              title: 'CAD Detailing and Dimensioning',
            },
            {
              code:  'CAD 224',
              title: 'CAD Mechanical Design II',
            },            
          ],
        },        
      ],
      certificatesProficiency: [
        {
          title: 'Computer Aided Design and Drafting--Basic',
          code: '02569',
          courses: [
           {
              code:  'CAD 220',
              title: 'Introduction to CAD/CAM Systems',
            },
            {
              code:  'CAD 222',
              title: 'CAD Mechanical Design I',
            },
            {
              code:  'CAD 230',
              title: 'Introduction to SolidWorks',
            },
            {
              code:  'CAD 223',
              title: 'CAD Detailing and Dimensioning',
            },
            {
              code:  'CAD 224',
              title: 'CAD Mechanical Design II',
            },          
          ],          
        }
      ],
      schedule: [
        // {
        //   name: 'Spring 2019 Schedule',
        //   id: '2019sp',
        //   courses: [
        //     {
        //       class: 'CAD-220-60',
        //       title: 'Introduction to CAD/CAM Systems',
        //       days: 'Mondays, Wednesdays',
        //       times: 'Evenings'
        //     },
        //     {
        //       class: 'CAD-222-60',
        //       title: 'CAD Mechanical Design I',
        //       days: 'Tuesdays, Thursdays',
        //       times: 'Evenings'
        //     },
        //     {
        //       class: 'CAD-295E-01',
        //       title: '3D Modeling using Maya',
        //       days: 'Tuesdays, Thursdays',
        //       times: 'Afternoons'
        //     },
        //   ]
        // },
        {
          name: 'Fall 2019 Schedule',
          id: '2019fa',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings'
            },
            {
              class: 'CAD-223-60',
              title: 'CAD Detailing and Dimensioning',
              days: 'Mondays, Wednesdays',
              times: 'Evenings'
            },
            {
              class: 'CAD-230-60',
              title: 'Introduction to SolidWorks',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings'
            },
            {
              class: 'CAD-274-01',
              title: '3D Animation using Maya',
              days: 'Mondays, Wednesdays',
              times: 'Mornings'
            },
          ]
        },
        {
          name: 'Spring 2020 Schedule',
          id: '2020sp',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings'
            },
            {
              class: 'CAD-224-60',
              title: 'CAD Mechanical Design II',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings'
            },
            {
              class: 'CAD-273-01',
              title: '3D Modeling Using Maya',
              days: 'Tuesdays, Thursdays',
              times: 'Afternoons'
            },
          ]
        },
        {
          name: 'Summer 2020 Schedule @ HEC San Ysidro',
          id: '2020su',
          courses: [
            {
              class: 'CAD-220-86',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Tuesdays, Wednesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 5201 at HEC San Ysidro',
            },
          ]
        },
        {
          name: 'Fall 2020 Proposed Schedule (Final Proto)',
          id: '2020fa',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-222-60',
              title: 'CAD Mechanical Design I',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-230-60',
              title: 'Introduction to SolidWorks',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-273-01',
              title: '3D Modeling Using Maya',
              days: 'Mondays, Wednesdays',
              times: 'Mornings',
              location: 'Room 38-109 at Chula Vista campus',
            },
          ]
        },
        {
          name: 'Spring 2021 Proposed Schedule (Phase I Proto)',
          id: '2021sp',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-222-60',
              title: 'CAD Mechanical Design I',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-223-60',
              title: 'CAD Detailing and Dimensioning',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-274-01',
              title: '3D Animation using Maya',
              days: 'Tuesdays, Thursdays',
              times: 'Afternoons',
              location: 'Room 38-109 at Chula Vista campus',
            },
          ]
        },
        // {
        //   name: 'Summer 2021 Proposed Schedule (Phase 0)',
        //   id: '2021su',
        //   courses: [
        //   ]
        // },
        {
          name: 'Fall 2021 Proposed Schedule (Phase 0)',
          id: '2021fa',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-224-60',
              title: 'CAD Mechanical Design II',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-230-60',
              title: 'Introduction to SolidWorks',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-273-01',
              title: '3D Modeling Using Maya',
              days: 'Mondays, Wednesdays',
              times: 'Mornings',
              location: 'Room 38-109 at Chula Vista campus',
            },
          ]
        },
        {
          name: 'Spring 2022 Proposed Schedule (Phase 0)',
          id: '2022sp',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-222-60',
              title: 'CAD Mechanical Design I',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-231-60',
              title: 'SolidWorks II',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-274-01',
              title: '3D Animation using Maya',
              days: 'Tuesdays, Thursdays',
              times: 'Afternoons',
              location: 'Room 38-109 at Chula Vista campus',
            },
          ]
        },
        // {
        //   name: 'Summer 2022 Proposed Schedule (Phase 0)',
        //   id: '2022su',
        //   courses: [
        //   ]
        // },
        {
          name: 'Fall 2022 Proposed Schedule (Phase 0)',
          id: '2022fa',
          courses: [
            {
              class: 'CAD-220-60',
              title: 'Introduction to CAD/CAM Systems',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-109 at Chula Vista campus',
            },
            {
              class: 'CAD-230-60',
              title: 'Introduction to SolidWorks',
              days: 'Mondays, Wednesdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-223-60',
              title: 'CAD Detailing and Dimensioning',
              days: 'Tuesdays, Thursdays',
              times: 'Evenings',
              location: 'Room 38-106 at Chula Vista campus',
            },
            {
              class: 'CAD-273-01',
              title: '3D Modeling Using Maya',
              days: 'Mondays, Wednesdays',
              times: 'Mornings',
              location: 'Room 38-109 at Chula Vista campus',
            },
          ]
        },
      ],
    }
  },
}
</script>

<style>
</style>