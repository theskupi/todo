import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const StatusCard: React.FC<{ header: string }> = ({ header }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{header}</CardTitle>
        <Button>Add</Button>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
