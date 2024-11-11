import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'
import NavBreadcrumb from '@/components/nav-breadcrumb'

export default function PageHistory() {
  return (
    <SidebarInset>
      <NavBreadcrumb
        breadcrumbLink='Building Yout Application'
        breadcrumbPage='Data History'
      />
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min'>
          <div className='p-5'>
            <h2 className='mb-2 text-xl font-bold'>Content History</h2>
            <p className='text-gray-700'>
              This is some descriptive text inside the card. It gives more
              information about the content.
            </p>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
