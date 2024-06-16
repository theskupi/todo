import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from './components/ui/button'

function App() {
  return (
    <section className="flex w-full justify-center gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Planned</CardTitle>
          <Button>Add</Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Ongoing</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Done</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  )
}

export default App
