import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Career() {
  const jobOpenings = [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for an experienced full-stack developer to join our growing engineering team. You'll work on cutting-edge projects using modern technologies.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Strong understanding of PostgreSQL and database design",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Knowledge of CI/CD pipelines and DevOps practices",
        "Excellent problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible working hours and remote work options",
        "Professional development budget",
        "Modern equipment and tools"
      ]
    },
    {
      id: "2",
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our design team to create beautiful, user-centric experiences for web and mobile applications. You'll collaborate closely with product and engineering teams.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Adobe Creative Suite, or similar tools",
        "Strong portfolio demonstrating design thinking and problem-solving",
        "Experience with design systems and component libraries",
        "Understanding of web technologies and responsive design"
      ],
      benefits: [
        "Creative freedom and ownership of design decisions",
        "Access to latest design tools and resources",
        "Collaborative and supportive team environment",
        "Opportunities to work on diverse projects",
        "Health and wellness benefits"
      ]
    },
    {
      id: "3",
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "Los Angeles / Hybrid",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead our digital marketing efforts to drive growth and brand awareness. You'll develop and execute comprehensive marketing strategies across multiple channels.",
      requirements: [
        "4+ years of experience in digital marketing",
        "Expertise in SEO, SEM, social media, and content marketing",
        "Experience with marketing automation and analytics tools",
        "Strong analytical skills and data-driven mindset",
        "Excellent written and verbal communication skills"
      ],
      benefits: [
        "Opportunity to shape marketing strategy",
        "Budget for marketing tools and conferences",
        "Flexible hybrid work arrangement",
        "Performance-based bonuses",
        "Career advancement opportunities"
      ]
    },
    {
      id: "4",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us scale our infrastructure and improve development workflows. You'll work on automation, monitoring, and deployment strategies.",
      requirements: [
        "4+ years of experience in DevOps or Site Reliability Engineering",
        "Expertise with Docker, Kubernetes, and cloud platforms",
        "Experience with Infrastructure as Code (Terraform, CloudFormation)",
        "Knowledge of monitoring and logging tools",
        "Strong scripting skills (Python, Bash, or similar)"
      ],
      benefits: [
        "Work with cutting-edge infrastructure technologies",
        "Flexible remote work environment",
        "Professional development and certification support",
        "Stock options and competitive salary",
        "Health and wellness programs"
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: "fas fa-heart",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs and mental health support."
    },
    {
      icon: "fas fa-clock",
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options to help you maintain a healthy work-life balance."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, certification support, and mentorship programs."
    },
    {
      icon: "fas fa-users",
      title: "Collaborative Culture",
      description: "Work with talented individuals in an inclusive, collaborative environment that values diversity and innovation."
    },
    {
      icon: "fas fa-chart-line",
      title: "Growth Opportunities",
      description: "Clear career progression paths, leadership development programs, and opportunities to take on new challenges."
    },
    {
      icon: "fas fa-star",
      title: "Competitive Package",
      description: "Competitive salary, equity participation, performance bonuses, and comprehensive benefits package."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Help us shape the future of digital innovation. We're always looking for talented individuals who are passionate about technology and making a difference.
          </p>
        </div>

        {/* Company Culture */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At INFINIQODE, we believe that great people build great products. Join a team that values innovation, collaboration, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <GlassCard key={index} className="p-8 hover:bg-white/5 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-6">
                  <i className={`${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role to advance your career with us.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <GlassCard key={job.id} className="p-8 hover:bg-white/5 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <Badge variant="outline" className="border-primary text-primary bg-primary/10">
                        {job.department}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-briefcase"></i>
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-clock"></i>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2 text-muted-foreground text-sm">
                              <i className="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">What We Offer:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-2 text-muted-foreground text-sm">
                              <i className="fas fa-star text-primary mt-1 flex-shrink-0"></i>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 mb-4"
                      data-testid={`button-apply-${job.id}`}
                    >
                      Apply Now
                    </Button>
                    <p className="text-muted-foreground text-xs text-center">
                      We'll get back to you within 2 business days
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Don't see a fit? */}
        <div className="text-center glass-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See the Perfect Role?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We're always interested in connecting with talented individuals. Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            data-testid="button-send-resume"
          >
            Send Your Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
