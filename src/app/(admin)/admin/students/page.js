import { UserTrainerTable } from "@/components/DataTable/StudentTable";
import { UserTrainerModal } from "@/components/Dialogs/StudentModal";

export default function Students() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">

        <h1 className="text-3xl font-bold text-center">Students</h1>
      <UserTrainerModal />
      </div>
      <UserTrainerTable />
    </div>
  );
}