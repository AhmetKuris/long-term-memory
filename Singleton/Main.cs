namespace Singleton
{
    public class Main
    {
        public Main()
        {
            var singletonSample = SingletonSample.Instance;
        }
    }

    public sealed class SingletonSample
    {
        private static SingletonSample instance;
        private static readonly object lockObject = new object();

        //Private constructor so that other classes can't create another one
        private SingletonSample()
        {
        }

        public static SingletonSample Instance
        {
            get
            {
                if (instance == null)
                {
                    lock (lockObject)
                    {
                        if (instance == null)
                        {
                            instance = new SingletonSample();
                        }
                    }
                }
                return instance;
            }
        }
    }
}