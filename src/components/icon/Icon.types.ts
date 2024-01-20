import { ISpacing } from "../../types";
import { IBaseProps } from "../base/Base.types";

export interface IIconProps extends IBaseProps {
  type: TListIcon;
  size?: TWidth;
  onClick?: () => void;
  loadSvg?: boolean;
  color?: string;
}

export type TWidth = string | number | ISpacing;

export const IconList: TListIcon[] = [
  "back-th2",
  "Big-Yes",
  "Close",
  "Delete (2)",
  "Download (2)",
  "Edit",
  "Error",
  "Expand",
  "Expand-1",
  "Expand-2",
  "Fly-to",
  "Info",
  "Link",
  "Link 2",
  "Mines (2)",
  "Mines (4)",
  "Neutral",
  "No",
  "notifications-th2",
  "Plus (2)",
  "Question",
  "Small-Yes",
  "Steering-wheel",
  "Transaction",
  "voice-assistant-th2",
  "Yes",
  "2D Barcode",
  "Add-1",
  "Add-Credit",
  "Add-With-Code",
  "Add",
  "Airline",
  "Allowed-Cargo",
  "Attach",
  "Back",
  "Basket",
  "Bell",
  "Bill",
  "Birth-Certificate",
  "Building",
  "Calendar",
  "Capacity",
  "Card",
  "Chat",
  "Clear",
  "Clock",
  "Copy",
  "Cost",
  "Dark",
  "Deduct",
  "Delete",
  "Depart",
  "Destination",
  "Device",
  "Download",
  "Edit",
  "Elec-Bill",
  "Email",
  "FaceDetection",
  "Fast-Payment",
  "Female",
  "Filter",
  "FingerPrint",
  "Flash-Off",
  "Flash-On",
  "Fly-Origin",
  "Forward",
  "Friends",
  "Gallery",
  "Gass-Bill",
  "Gender",
  "Gift",
  "GiftNavFill",
  "Help-Rules",
  "Info",
  "Instagram",
  "Insurense",
  "Invitation",
  "Key",
  "Language",
  "Last",
  "Light",
  "Line-Chart",
  "Lock",
  "Male",
  "Messages",
  "Mic",
  "Mines",
  "Multi-City",
  "Next",
  "One Way",
  "Origin",
  "Passport",
  "Past",
  "Paste",
  "Percent",
  "Phone-Bill",
  "Phone",
  "Plane",
  "Plus",
  "Plus (4)",
  "Post",
  "Previous",
  "Prize",
  "Profile-NavFill",
  "Profile",
  "ProfileNavBar",
  "Path",
  "QR-Code",
  "Question",
  "Refresh",
  "Regular-Add-Credit",
  "Regular-Payment",
  "Remove",
  "Request-Credit",
  "Return",
  "Rounded",
  "Search",
  "Seat",
  "Send-Credit",
  "Service",
  "ServicesNavFill",
  "Setting",
  "Share",
  "Show",
  "switch location",
  "SimCard-1",
  "SimCard",
  "Sort",
  "Support",
  "Telegram",
  "Theme",
  "Ticket-Destination",
  "Ticket-Download",
  "Ticket-Share",
  "Ticket-Upload",
  "Ticket",
  "Tracket",
  "Train",
  "Transactions",
  "UnLock",
  "Update-Refresh",
  "Upload",
  "Video",
  "Wallet",
  "Water-Bill",
  "WalletNavFill",
  "Logo",
  "add-add-android",
  "add-add-ios",
  "more-add-android",
  "share-add-ios",
  "text-add-ios",
  "navigate",
  "navigatePurple",
  "aboutUS",
  "HamrahAval",
  "Irancell",
  "Rightel",
  "Highway",
  "SidePark",
  "Trafic Plan",
  "CarFines",
  "Star",
  "StarFill",
  "StarEmpty",
  "hamrahi-internet",
  "hamrahi-call-package",
  "Singout",
  "MidDown",
  "RedClose",
  "GreenPlus",
  "Loan-Amount",
  "Id-Info",
  "Financial-Info",
  "Validation",
  "Guarantee",
  "Contract",
  "File",
  "airplane-ticket",
  "bus ticket",
  "trainLine",
  "ThirdPartyInsurance",
  "Taxi-In",
  "Taxi-Out",
  "arrowLeft",
  "trainLine",
  "Vertical Switch",
  "Subset",
  "Location",
  "switch",
  "ThirdPartyInsurance",
  "Ellipse",
  "Cachout",
  "DownRight",
  "Validation-Otp",
  "Simcard-Phone",
  "Arrow-bold",
  "Hide",
  "Info-new",
  "TrainTicket",
  "Orange-Neutral",
  "NotExist",
  "TicketDownload",
];

export type TListIcon =
  | "back-th2"
  | "Big-Yes"
  | "Close"
  | "Delete (2)"
  | "Download (2)"
  | "Edit"
  | "Error"
  | "Expand"
  | "Expand-1"
  | "Expand-2"
  | "Fly-to"
  | "Info"
  | "Link"
  | "Link 2"
  | "Mines (2)"
  | "Mines (4)"
  | "Neutral"
  | "No"
  | "notifications-th2"
  | "Plus (2)"
  | "Question"
  | "Small-Yes"
  | "Steering-wheel"
  | "Transaction"
  | "voice-assistant-th2"
  | "Yes"
  | "2D Barcode"
  | "Add-1"
  | "Add-Credit"
  | "Add-With-Code"
  | "Add"
  | "Airline"
  | "Allowed-Cargo"
  | "Attach"
  | "Back"
  | "Basket"
  | "Bell"
  | "Bill"
  | "Birth-Certificate"
  | "Building"
  | "Calendar"
  | "Capacity"
  | "Card"
  | "Chat"
  | "Clear"
  | "Clock"
  | "Copy"
  | "Cost"
  | "Dark"
  | "Deduct"
  | "Delete"
  | "Depart"
  | "Destination"
  | "Device"
  | "Download"
  | "Edit"
  | "Elec-Bill"
  | "Email"
  | "FaceDetection"
  | "Fast-Payment"
  | "Female"
  | "Filter"
  | "FingerPrint"
  | "Flash-Off"
  | "Flash-On"
  | "Fly-Origin"
  | "Forward"
  | "Friends"
  | "Gallery"
  | "Gass-Bill"
  | "Gender"
  | "Gift"
  | "GiftNavFill"
  | "Help-Rules"
  | "Info"
  | "Instagram"
  | "Insurense"
  | "Invitation"
  | "Key"
  | "Language"
  | "Last"
  | "Light"
  | "Line-Chart"
  | "Lock"
  | "Male"
  | "Messages"
  | "Mic"
  | "Mines"
  | "Multi-City"
  | "Next"
  | "One Way"
  | "Origin"
  | "Passport"
  | "Past"
  | "Paste"
  | "Percent"
  | "Phone-Bill"
  | "Phone"
  | "Plane"
  | "Plus"
  | "Plus (4)"
  | "Post"
  | "Previous"
  | "Prize"
  | "Profile-NavFill"
  | "Profile"
  | "ProfileNavBar"
  | "Path"
  | "QR-Code"
  | "Question"
  | "Refresh"
  | "Regular-Add-Credit"
  | "Regular-Payment"
  | "Remove"
  | "Request-Credit"
  | "Return"
  | "Rounded"
  | "Search"
  | "Seat"
  | "Send-Credit"
  | "Service"
  | "ServicesNavFill"
  | "Setting"
  | "Share"
  | "Show"
  | "switch location"
  | "SimCard-1"
  | "SimCard"
  | "Sort"
  | "Support"
  | "Telegram"
  | "Theme"
  | "Ticket-Destination"
  | "Ticket-Download"
  | "Ticket-Share"
  | "Ticket-Upload"
  | "Ticket"
  | "Tracket"
  | "Train"
  | "Transactions"
  | "UnLock"
  | "Update-Refresh"
  | "Upload"
  | "Video"
  | "Wallet"
  | "Water-Bill"
  | "WalletNavFill"
  | "Logo"
  | "add-add-android"
  | "add-add-ios"
  | "more-add-android"
  | "share-add-ios"
  | "text-add-ios"
  | "navigate"
  | "navigatePurple"
  | "aboutUS"
  | "HamrahAval"
  | "Irancell"
  | "Rightel"
  | "Highway"
  | "SidePark"
  | "Trafic Plan"
  | "CarFines"
  | "Star"
  | "StarFill"
  | "StarEmpty"
  | "hamrahi-internet"
  | "hamrahi-call-package"
  | "Singout"
  | "MidDown"
  | "RedClose"
  | "GreenPlus"
  | "Loan-Amount"
  | "Id-Info"
  | "Financial-Info"
  | "Validation"
  | "Guarantee"
  | "Contract"
  | "File"
  | "airplane-ticket"
  | "bus ticket"
  | "trainLine"
  | "ThirdPartyInsurance"
  | "Taxi-In"
  | "Taxi-Out"
  | "arrowLeft"
  | "trainLine"
  | "Vertical Switch"
  | "Subset"
  | "Location"
  | "switch"
  | "ThirdPartyInsurance"
  | "Ellipse"
  | "Cachout"
  | "DownRight"
  | "Validation-Otp"
  | "Simcard-Phone"
  | "Arrow-bold"
  | "Hide"
  | "Info-new"
  | "TrainTicket"
  | "Orange-Neutral"
  | "NotExist"
  | "TicketDownload";
// type Size = 16 | 20 | 24 | 40 | 64 | 88;
