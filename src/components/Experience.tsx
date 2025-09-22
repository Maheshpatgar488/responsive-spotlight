import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Meliorate Technology Private Limited",
      role: "React Developer",
      period: "Aug 2024 - Present",
      location: "Current Position",
      type: "Full-time",
      achievements: [
        "Developed a responsive E-commerce Food Store website using HTML, CSS, JavaScript, and Bootstrap",
        "Built Home, Contact, and Products pages with clean and user-friendly UI",
        "Integrated Contact Form with EmailJS for direct mail submissions and embedded map view",
        "Designed Products page with full cart functionality – add, increment, decrement, delete, and checkout"
      ],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Bootstrap", "EmailJS"]
    },
    {
      company: "Icampusbuddy Pvt Ltd",
      role: "Junior Developer", 
      period: "May 2024 - Aug 2024",
      location: "3 months",
      type: "Full-time",
      achievements: [
        "Delivered a beauty products website using HTML, CSS, and Bootstrap with responsive design",
        "Developed functional 'Contact Us' form with successful email submission integration",
        "Increased lead capture by 20% through improved form functionality and user experience",
        "Ensured cross-device compatibility and mobile responsiveness"
      ],
      technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Responsive Design"]
    },
    {
      company: "Tanush Solutions",
      role: "Angular & Web Developer",
      period: "Jan 2023 - Jun 2023", 
      location: "6 months",
      type: "Freelance",
      achievements: [
        "Developed and deployed 3+ Angular-based websites, improving performance scores by 25%",
        "Optimized website performance through refined font choices, image sizes, and design improvements",
        "Achieved better Lighthouse scores and faster load times across all projects",
        "Deployed websites on company's Plesk server with real-time update capabilities",
        "Contributed technical expertise, resulting in 15% reduction in system failures"
      ],
      technologies: ["Angular 14", "TypeScript", "HTML/CSS", "Performance Optimization", "Plesk"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative web solutions and contributing to impactful projects
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`bg-card-gradient border-0 shadow-card hover-lift animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gradient">{exp.company}</h3>
                        <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <Card className="mt-12 bg-skill-gradient border-0 shadow-soft animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Experience Summary</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2.7+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Companies Worked With</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Performance Improvement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;