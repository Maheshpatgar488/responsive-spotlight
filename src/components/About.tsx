import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code2, Briefcase, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "2.7+ Years Experience",
      description: "Frontend Development"
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Modern Tech Stack",
      description: "React.js, Angular, Node.js"
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Performance Focus", 
      description: "25% improvement in scores"
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "B.Sc. IT Graduate",
      description: "CGPA 7.3/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer with expertise in building responsive, user-focused web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="animate-slide-up">
            <Card className="bg-card-gradient border-0 shadow-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a Frontend Developer with <strong className="text-foreground">2.7 years of experience</strong> building 
                    responsive, scalable web applications using modern technologies like React.js, Angular, and Tailwind CSS.
                  </p>
                  <p>
                    My expertise spans across <strong className="text-foreground">modern JavaScript frameworks</strong>, 
                    REST APIs, and UI optimization. I have hands-on experience with backend technologies including 
                    Node.js, Express, and MySQL.
                  </p>
                  <p>
                    I'm passionate about <strong className="text-foreground">performance optimization</strong> and have successfully 
                    improved website performance scores by 25% through strategic optimizations in font choices, 
                    image handling, and overall design architecture.
                  </p>
                  <p>
                    Currently leveraging <strong className="text-foreground">AI-assisted development tools</strong> like 
                    GitHub Copilot and OpenAI API to enhance productivity and code quality in my projects.
                  </p>
                </div>

                {/* Education */}
                <div className="mt-8 p-4 bg-skill-gradient rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Education</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Bachelor of Science in Information Technology</strong><br />
                    DTSS College of Science & Commerce • CGPA: 7.3/10 • Oct 2020
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up [animation-delay:0.2s]">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card-gradient border-0 shadow-soft hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-skill-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 text-center animate-slide-up [animation-delay:0.4s]">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React.js', 'Angular', 'JavaScript', 'TypeScript', 'Node.js', 
              'Tailwind CSS', 'Bootstrap', 'HTML/CSS', 'Git', 'MySQL'
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover-lift">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;