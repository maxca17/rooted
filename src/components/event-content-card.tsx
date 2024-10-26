import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10 lg:items-end"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody 
        className="col-span-full lg:col-span-3"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography variant="h6" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {panel}
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4 font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {des}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-0.5" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {name}
            </Typography>
            <Typography variant="small" className="font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              {position}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
