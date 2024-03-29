function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>
        <div
          className={`mt-10 rounded-xl bg-dark-4 flex justify-center items-center p-4`}
        >
          <h5 className="text-base-semibold text-primary-500">Stay Tuned!</h5>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
        <div
          className={`mt-10 rounded-xl bg-dark-4 flex justify-center items-center p-4`}
        >
          <h5 className="text-base-semibold text-primary-500">Stay Tuned!</h5>
        </div>
      </div>
    </section>
  );
}
export default RightSidebar;
