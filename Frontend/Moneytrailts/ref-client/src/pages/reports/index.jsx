import {
  Card,
  CardContent,
} from "../../components/ui/card.jsx";
import PageLayout from "../../components/page-layout.jsx";
import ScheduleReportDrawer from "./_component/schedule-report-drawer.jsx";
import ReportTable from "./_component/report-table.jsx";


export default function Reports() {

  return (
    <PageLayout
      title="Report History"
      subtitle="View and manage your financial reports"
      addMarginTop
      rightAction={
        <ScheduleReportDrawer />
      }
    >
      <Card className="border shadow-none">
        <CardContent>
          <ReportTable />
        </CardContent>
      </Card>
    </PageLayout>
  );
}
