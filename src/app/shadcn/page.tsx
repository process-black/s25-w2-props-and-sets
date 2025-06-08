import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ShadcnDemo() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-7xl font-black mb-12 text-center">shadcn/ui components</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Button Section */}
        <Card>
          <CardHeader>
            <CardTitle className="font-black">Button</CardTitle>
            <CardDescription>Interactive button component with multiple variants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Section */}
        <Card>
          <CardHeader>
            <CardTitle className="font-black">Badge</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>New</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="destructive">Deprecated</Badge>
              <Badge variant="outline">Coming Soon</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="font-black">Input</CardTitle>
            <CardDescription>Form input components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your name" />
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Enter your password" />
            <Input disabled placeholder="Disabled input" />
          </CardContent>
        </Card>

        {/* Card Section */}
        <Card>
          <CardHeader>
            <CardTitle className="font-black">Card</CardTitle>
            <CardDescription>Container component for grouping content</CardDescription>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Nested Card Example</CardTitle>
                <CardDescription>This is a card inside another card</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. This demonstrates the nested structure.</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}