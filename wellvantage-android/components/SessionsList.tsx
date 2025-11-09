import { sessionData } from "@/app/mockdata/sessionsData";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Divider } from "./ui/divider";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
interface SessionListProps {
  tableTitle: string;
  data: sessionData[];
  hasCancelAction: boolean;
}
const SessionsList = ({
  data,
  tableTitle,
  hasCancelAction,
}: SessionListProps) => {
  const tintColor = useThemeColor({}, "tint");
  return (
    <Box style={[{ backgroundColor: tintColor }]} className="rounded-md p-3">
      <VStack>
        <Text bold size="xl" className="px-2">
          {tableTitle}
        </Text>
        <Divider className="my-4 px-4 bg-gray-500" />
        <Table className="w-full  min-w-full">
          <TableHeader>
            <TableRow className="border-b-0 ">
              <TableHead className="px-2 py-2">Date</TableHead>
              <TableHead className="px-2 py-2">Time</TableHead>
              <TableHead className="px-2 py-2">Customer</TableHead>
              {hasCancelAction && (
                <TableHead className="px-2 py-2">Action</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((el) => {
              return (
                <TableRow key={el.id} className="border-b-0">
                  <TableData className="px-2 py-2">{el.date}</TableData>
                  <TableData className="px-2 py-2">{el.time}</TableData>
                  <TableData className="px-2 py-2">{el.customer}</TableData>
                  {hasCancelAction && (
                    <TableData className="px-2 py-2">
                      <Button variant="solid" className="bg-red-500" size="sm">
                        <ButtonText className="text-white">Cancel</ButtonText>
                      </Button>
                    </TableData>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </VStack>
    </Box>
  );
};

export default SessionsList;
