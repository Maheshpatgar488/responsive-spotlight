import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Brain, 
  Zap,
  Globe,
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Python", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Angular 14", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Django", level: 70 }
      ]
    },
    {
      title: "Styling & Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vite", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Plesk Server", level: 70 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Local Storage", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "AI & Modern Tools",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "GitHub Copilot", level: 85 },
        { name: "ChatGPT/OpenAI API", level: 80 },
        { name: "AI-assisted Development", level: 85 }
      ]
    }
  ];

  const softSkills = [
    "Communication",
    "Problem-solving", 
    "Critical thinking",
    "Adaptability",
    "Teamwork",
    "Time management",
    "Leadership",
    "Project Management"
  ];

  const certifications = [
    {
      title: "Performance Optimization",
      description: "25% improvement in Lighthouse scores"
    },
    {
      title: "Full Stack Development",
      description: "Frontend + Backend integration"
    },
    {
      title: "Responsive Design Expert",
      description: "Cross-device compatibility"
    },
    {
      title: "API Integration",
      description: "REST APIs and third-party services"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-card-gradient border-0 shadow-card hover-lift animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-skill-gradient rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16 animate-slide-up [animation-delay:0.6s]">
          <Card className="bg-card-gradient border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-skill-gradient rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover-lift">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements & Certifications */}
        <div className="animate-slide-up [animation-delay:0.8s]">
          <Card className="bg-skill-gradient border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-center justify-center">
                <Globe className="h-5 w-5" />
                Key Achievements & Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;