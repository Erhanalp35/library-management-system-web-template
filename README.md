# Library Management System Web Template

A comprehensive and responsive library management administration system built with **HTML5, CSS3, and Vanilla JavaScript**.

This project provides a complete front-end solution for managing books, authors, publishers, members, borrowing, returns, reservations, fines, inventory, analytics, and reports.

It is designed as a downloadable web template that can run locally without React, Next.js, a backend, database, or account system.

## Features

### Dashboard

Get a complete overview of library activity.

- Total Books
- Total Book Copies
- Available Books
- Borrowed Books
- Reserved Books
- Overdue Books
- Total Members
- Active Members
- Outstanding Fines
- Fines Collected
- Recent Borrowings
- Upcoming Due Dates
- Popular Books
- Recent Activity
- Quick Actions

### Book Management

Manage the complete library catalog.

- Add books
- Edit books
- View book details
- Duplicate records
- Archive books
- Restore books
- Delete books
- Search books
- Filter books
- Sort books

Book information can include:

- Title
- ISBN
- Author
- Category
- Publisher
- Publication Year
- Language
- Edition
- Description
- Shelf Location
- Total Copies
- Available Copies
- Borrowed Copies
- Reserved Copies
- Lost Copies
- Damaged Copies
- Status

### Author Management

Create and manage author records.

- Add authors
- Edit authors
- Delete authors
- Search authors
- View author profiles
- View books by author
- Track book count
- Track borrowing popularity

### Category Management

Organize the library catalog into categories.

- Add categories
- Edit categories
- Delete categories
- Search categories
- View related books
- Book count
- Borrowing statistics
- Category popularity

### Publisher Management

Manage publishers.

- Add publishers
- Edit publishers
- Delete publishers
- Search publishers
- View books by publisher
- Track published book count

### Member Management

Create and manage library member profiles.

- Add members
- Edit members
- View member profiles
- Suspend members
- Reactivate members
- Delete members
- Search
- Filter
- Sort

Member information can include:

- Member ID
- First Name
- Last Name
- Email
- Phone
- Address
- Membership Type
- Join Date
- Expiration Date
- Status
- Notes

Member profiles can display:

- Current Loans
- Borrowing History
- Reservations
- Overdue Books
- Outstanding Fines
- Paid Fines
- Total Books Borrowed

### Borrowing Management

Manage book loans.

Features include:

- Select Member
- Select Book
- Set Borrow Date
- Set Due Date
- Validate Available Copies
- Validate Member Status
- Validate Borrowing Limits
- Prevent duplicate invalid loans
- Track active loans
- View borrowing history

Loan statuses can include:

- Active
- Due Soon
- Overdue
- Returned
- Lost

### Returns

Process book returns.

When returning a book, the system can:

- Update loan status
- Update available book copies
- Calculate overdue days
- Calculate late fines
- Update member history
- Update library statistics

### Reservations

Allow members to reserve unavailable books.

Features:

- Create reservation
- Cancel reservation
- Reservation queue
- Reservation status
- Book availability tracking
- Member reservation history

Reservation statuses can include:

- Waiting
- Ready
- Fulfilled
- Cancelled
- Expired

### Fine Management

Manage overdue and other fines.

Fine data can include:

- Member
- Loan
- Book
- Fine Type
- Amount
- Paid Amount
- Remaining Amount
- Status
- Created Date
- Paid Date

Fine statuses:

- Unpaid
- Partially Paid
- Paid
- Waived

### Inventory Management

Track physical book copies.

Inventory statistics can include:

- Total Copies
- Available Copies
- Borrowed Copies
- Reserved Copies
- Lost Copies
- Damaged Copies

Track shelf locations and book availability.

### Calendar

View important library dates.

The calendar can display:

- Loan Due Dates
- Overdue Loans
- Reservation Expiration Dates
- Membership Expiration Dates

Features:

- Previous Month
- Next Month
- Today
- Date Selection
- Date Details

### Analytics

Analyze library activity using real application data.

Metrics can include:

- Total Loans
- Monthly Borrowings
- Return Rate
- Overdue Rate
- Average Loan Duration
- Active Members
- Fine Collection
- Inventory Usage

Charts can include:

- Borrowings Over Time
- Returns Over Time
- Popular Books
- Popular Categories
- Most Active Members
- Loan Status Distribution
- Fine Collection Trend
- Inventory Distribution
- Member Growth

### Reports

Generate useful library management reports.

Available reports can include:

- Book Report
- Member Report
- Borrowing Report
- Return Report
- Overdue Report
- Fine Report
- Category Report
- Publisher Report
- Inventory Report
- Reservation Report

### Search, Filters & Sorting

Search across:

- Books
- Authors
- Members
- Categories
- Publishers
- Loans
- Reservations

Useful filters can include:

- Book Status
- Category
- Author
- Publisher
- Language
- Member Status
- Loan Status
- Reservation Status
- Fine Status
- Due Date

Sorting options can include:

- Book Title
- Publication Year
- Available Copies
- Most Borrowed
- Member Name
- Join Date
- Due Date
- Fine Amount

### Import & Export

Manage application data locally.

- Export application data as JSON
- Import JSON backups
- Merge imported data
- Replace existing data
- Validate imported files
- Prevent malformed imports from destroying existing information

### Settings

Configure library preferences.

Settings can include:

- Library Name
- Default Loan Duration
- Fine Per Day
- Maximum Books Per Member
- Reservation Expiration Period
- Membership Duration
- Date Format
- Currency
- Theme
- Compact Mode
- Default Table Page Size

Supported currencies can include:

- USD
- EUR
- GBP
- TRY
- CAD
- AUD
- JPY

## Light & Dark Mode

The template includes:

- Light Theme
- Dark Theme

Theme preference can be stored locally in the browser.

## Responsive Design

The interface is designed for:

- Smartphones
- Tablets
- Laptops
- Desktop Computers

Navigation, tables, cards, forms, charts, filters, dialogs, and reports adapt to different screen sizes.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage
- Chart.js
- Lucide Icons

The project does not require:

- React
- Next.js
- Vue
- Angular
- PHP
- Backend Server
- Remote Database
- Authentication Server
- API Keys

## Modular Architecture

The project uses multiple HTML, CSS, and JavaScript files instead of a single large application file.

Example structure:

```text
library-management-system-web-template/
│
├── index.html
├── books.html
├── authors.html
├── categories.html
├── publishers.html
├── members.html
├── borrowing.html
├── returns.html
├── reservations.html
├── fines.html
├── inventory.html
├── calendar.html
├── analytics.html
├── reports.html
├── settings.html
│
└── assets/
    ├── css/
    │   ├── variables.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── sidebar.css
    │   ├── header.css
    │   ├── components.css
    │   ├── cards.css
    │   ├── forms.css
    │   ├── tables.css
    │   ├── modals.css
    │   ├── calendar.css
    │   ├── charts.css
    │   └── responsive.css
    │
    └── js/
        ├── core/
        ├── ui/
        ├── data/
        └── modules/
```

## Data Storage

Application data can be stored using browser `localStorage`.

Stored data may include:

- Books
- Authors
- Categories
- Publishers
- Members
- Loans
- Reservations
- Fines
- Inventory
- Settings

Data remains available after page refreshes unless local storage is cleared.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Erhanalp35/library-management-system-web-template.git
```

Open the project folder:

```bash
cd library-management-system-web-template
```

Then open:

```text
index.html
```

No backend or database installation is required.

## Demo Data

The template may initialize realistic demo library data on the first launch.

Demo content can include:

- Books
- Authors
- Categories
- Publishers
- Members
- Loans
- Overdue Loans
- Reservations
- Fines
- Inventory Statistics

Demo data should only initialize when no valid user data already exists.

## Privacy

The application can operate entirely inside the browser.

It does not require:

- User Accounts
- Remote Databases
- Cloud Storage
- API Keys
- External Servers

## Screenshots

Add screenshots here:

```md
![Dashboard](assets/images/dashboard-preview.png)

![Books](assets/images/books-preview.png)

![Members](assets/images/members-preview.png)

![Analytics](assets/images/analytics-preview.png)
```

## Future Improvements

Possible future additions include:

- Real authentication
- Role-based permissions
- Backend database integration
- Barcode scanning
- ISBN lookup APIs
- QR member cards
- Email reminders
- Automatic overdue notifications
- PDF reports
- Printable member cards
- Multi-branch libraries
- Inter-library transfers
- Cloud synchronization
- Digital book management

## Contributing

Contributions, bug reports, and feature suggestions are welcome.

Fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.
