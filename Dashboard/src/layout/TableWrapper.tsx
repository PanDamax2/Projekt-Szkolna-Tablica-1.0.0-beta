import { TableWrapperProps } from "../types/components/TableWrapper";

export function TableWrapper({ children } : TableWrapperProps) {
    return <div className='overflow-x-auto'>{children}</div>
}