import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ShoppingCart, Mail, MapPin, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ecomm-Food-Stores",
      description: "A responsive e-commerce food store website with comprehensive shopping functionality including product listings, cart management, and integrated contact system.",
      longDescription: "Developed a fully responsive HTML, CSS, JavaScript, and Bootstrap e-commerce platform featuring clean navigation between Home, Contact, and Products pages. The contact form is seamlessly integrated with EmailJS for direct mail submissions and includes an embedded map view for enhanced user experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "EmailJS"],
      features: [
        "Responsive design across all devices",
        "Product listing with add-to-cart functionality",
        "Cart management (add, increment, decrement, delete)",
        "Checkout process implementation",
        "Contact form with EmailJS integration",
        "Embedded map integration"
      ],
      github: "https://github.com/maheshpatgar/ecomm-food-stores",
      demo: "https://maheshpatgar.github.io/ecomm-food-stores",
      icon: <ShoppingCart className="h-6 w-6" />,
      category: "E-commerce"
    },
    {
      title: "Food-Villae",
      description: "Advanced React.js food store web application with authentication, protected routes, and comprehensive cart functionality built with modern development practices.",
      longDescription: "Built using React.js and Vite, this application showcases advanced frontend development with secure user authentication, protected routing, and seamless API integration. Features a complete shopping experience with persistent cart functionality using local storage.",
      technologies: ["React.js", "Vite", "JavaScript", "EmailJS", "Local Storage", "REST APIs"],
      features: [
        "Secure user authentication (login/register/logout)",
        "Protected routes for user sessions",
        "Product API integration",
        "Shopping cart with persistent storage",
        "Add/remove/update cart functionality", 
        "Dummy payment flow implementation",
        "Modern React hooks and patterns"
      ],
      github: "https://github.com/maheshpatgar/food-villae",
      demo: "https://maheshpatgar.github.io/food-villae",
      icon: <Zap className="h-6 w-6" />,
      category: "React Application"
    },
    {
      title: "Beauty Products Website",
      description: "Professional beauty products showcase website with responsive design and lead generation capabilities, resulting in 20% increase in lead capture.",
      longDescription: "Delivered a visually appealing and fully responsive website for beauty products using HTML, CSS, and Bootstrap. Focused on user experience optimization and lead generation through strategic form placement and design.",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive Design"],
      features: [
        "Responsive design across various devices",
        "Product showcase and gallery",
        "Contact form with email integration",
        "Lead capture optimization",
        "Cross-browser compatibility",
        "SEO-optimized structure"
      ],
      github: "https://github.com/maheshpatgar/beauty-products",
      demo: "#",
      icon: <Mail className="h-6 w-6" />,
      category: "Business Website"
    },
    {
      title: "Angular Portfolio Sites",
      description: "Multiple high-performance Angular websites with 25% improvement in Lighthouse scores through strategic optimization techniques.",
      longDescription: "Developed and deployed 3+ Angular-based websites with focus on performance optimization, achieving significant improvements in Lighthouse scores through refined font choices, optimized image sizes, and enhanced overall design architecture.",
      technologies: ["Angular 14", "TypeScript", "HTML5", "CSS3", "Plesk Server"],
      features: [
        "25% performance score improvement",
        "Optimized Lighthouse scores",
        "Real-time deployment capabilities",
        "Font and image optimization",
        "Server deployment on Plesk",
        "System failure reduction by 15%"
      ],
      github: "https://github.com/maheshpatgar/angular-portfolio",
      demo: "#",
      icon: <MapPin className="h-6 w-6" />,
      category: "Angular Applications"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies and best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-card-gradient border-0 shadow-card hover-lift group animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-gradient">{project.title}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild className="hover-lift">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button variant="ghost" size="sm" asChild className="hover-lift">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p className="text-sm text-muted-foreground mb-6">{project.longDescription}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs hover-lift">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild className="hover-lift">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button variant="outline" size="sm" asChild className="hover-lift">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <Card className="mt-12 bg-skill-gradient border-0 shadow-soft animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gradient">Project Impact</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Performance Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-sm text-muted-foreground">Lead Capture Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Responsive Design</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;