import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { __ } from "@wordpress/i18n"
import { EditSquare,Filter,Setting } from "react-iconly"



export default function EditElementSidebar() {
  return (
    <div className='mb-2'>
      <div className='px-2 py-5'>
        <h2 className='text-lg text-white font-bold text-center '>{__("Edit Elements", 'wooinvoice')}</h2>
      </div>
      <div>
        <Tabs defaultValue="content" className="px-2">
          <TabsList className="grid w-full h-auto grid-cols-3">
            <TabsTrigger value="content">
              <div className="text-center py-3 flex flex-col items-center">
                <EditSquare className="h-5 w-5 mb-1" />
                <span>
                  Content
                </span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="style">
              <div className="text-center py-3 flex flex-col items-center">
                <Filter className="h-5 w-5 mb-1" />
                <span>
                  Style
                </span>
              </div></TabsTrigger>
            <TabsTrigger value="advanced"> <div className="text-center py-3 flex flex-col items-center">
              <Setting className="h-5 w-5 mb-1" />
              <span>
                Advanced
              </span>
            </div></TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <Card>

            </Card>
          </TabsContent>
          <TabsContent value="style">
            <Card>  </Card>
          </TabsContent>
          <TabsContent value="advanced">
            <Card>  </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
