export interface Stock {
    tag: string;
    model_no?: string;
    model_size?: string;
    quantity: number;
    gold: number;
    labour_charge: number;
    gross_weight: number;
    package_weight: number;
    in_stock: number;
    agent_id: string;
    record_time: string;
    employee_id: string;
    reference: string;
    bill_no: string;
    job_id: number;
}
