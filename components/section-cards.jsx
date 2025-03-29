import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="flex gap-3 px-3 mt-1 lg:px-5 pb-3">
      {[
        {
          title: "Total Revenue",
          value: "$1,250.00",
          trend: "+12.5%",
          icon: <IconTrendingUp />,
          footerMain: "Trending up this month",
          footerSub: "Visitors for the last 6 months",
        },
        {
          title: "New Customers",
          value: "1,234",
          trend: "-20%",
          icon: <IconTrendingDown />,
          footerMain: "Down 20% this period",
          footerSub: "Acquisition needs attention",
        },
        {
          title: "Active Accounts",
          value: "45,678",
          trend: "+12.5%",
          icon: <IconTrendingUp />,
          footerMain: "Strong user retention",
          footerSub: "Engagement exceed targets",
        },
        {
          title: "Growth Rate",
          value: "4.5%",
          trend: "+4.5%",
          icon: <IconTrendingUp />,
          footerMain: "Steady performance increase",
          footerSub: "Meets growth projections",
        },
      ].map((card, i) => (
        <Card
          key={i}
          className="@container/card gap-3 min-w-[200px] flex-shrink-0 text-sm"
        >
          <CardHeader className="px-3">
            <CardDescription className="text-xs">
              {card.title}
            </CardDescription>
            <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-2xl">
              {card.value}
            </CardTitle>
            <CardAction className="">
              <Badge variant="outline" className="gap-1 px-2  text-xs">
                {card.icon}
                {card.trend}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-xs px-3 ">
            <div className="line-clamp-1 items-center flex gap-1 font-medium">
              {card.footerMain} {card.icon}
            </div>
            <div className="text-muted-foreground">{card.footerSub}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}


