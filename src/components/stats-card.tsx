import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder="Card Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <Typography variant="h1" className="font-bold" color="blue-gray" placeholder="Count Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        {count}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mt-1 font-medium" placeholder="Title Placeholder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
