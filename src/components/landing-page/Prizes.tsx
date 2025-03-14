import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Gift } from "lucide-react"

export default function PrizesSection() {
  return (
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
          <div className="container mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                      Prizes
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                      Compete for a chance to win these amazing prizes across
                      different categories.
                  </p>
              </div>

              {/* Grand Prizes Section */}
              <div className="mb-16">
                  <div className="flex items-center gap-2 mb-6">
                      <Trophy className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">Grand Prizes</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card className="border-2 border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors">
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Trophy className="h-5 w-5 text-primary" />
                                  First Place
                              </CardTitle>
                              <CardDescription>
                                  Grand Prize Winner
                              </CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Trophy className="h-5 w-5 text-primary" />
                                  Second Place
                              </CardTitle>
                              <CardDescription>Runner-up Prize</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Trophy className="h-5 w-5 text-primary" />
                                  Third Place
                              </CardTitle>
                              <CardDescription>
                                  Third Place Prize
                              </CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>

              {/* Track Prizes Section */}
              <div className="mb-16">
                  <div className="flex items-center gap-2 mb-6">
                      <Award className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">Track Prizes</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Award className="h-5 w-5 text-primary" />
                                  Best [Track] Project
                              </CardTitle>
                              <CardDescription>Track Info</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Award className="h-5 w-5 text-primary" />
                                  Best [Track] Project
                              </CardTitle>
                              <CardDescription>Track Info</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Award className="h-5 w-5 text-primary" />
                                  Best [Track] Project
                              </CardTitle>
                              <CardDescription>Track Info</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">[Prize]</p>
                                  <p className="text-muted-foreground">
                                      [Prize Description]
                                  </p>
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>

              {/* Special Prizes Section */}
              <div>
                  <div className="flex items-center gap-2 mb-6">
                      <Gift className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">Special Prizes</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Gift className="h-5 w-5 text-primary" />
                                  Best UI/UX
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">$1,500</p>
                                  <p className="text-muted-foreground">
                                      For the project with the most impressive
                                      user interface and experience design.
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Gift className="h-5 w-5 text-primary" />
                                  Most Innovative
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">$1,500</p>
                                  <p className="text-muted-foreground">
                                      For the most creative and innovative
                                      solution to a problem.
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Gift className="h-5 w-5 text-primary" />
                                  Community Choice
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">$1,500</p>
                                  <p className="text-muted-foreground">
                                      Voted by the community as the most
                                      impactful or favorite project.
                                  </p>
                              </div>
                          </CardContent>
                      </Card>

                      <Card>
                          <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                  <Gift className="h-5 w-5 text-primary" />
                                  Best Rookie Team
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="space-y-2">
                                  <p className="font-bold text-xl">$1,500</p>
                                  <p className="text-muted-foreground">
                                      For the best project created by a team
                                      participating in their first hackathon.
                                  </p>
                              </div>
                          </CardContent>
                      </Card>
                  </div>
              </div>
          </div>
      </section>
  );
}