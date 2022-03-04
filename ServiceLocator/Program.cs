using System;
using System.Collections.Generic;

namespace ServiceLocator
{
    class Program
    {
        static void Main(string[] args)
        {
            var dependencyA = ServiceLocator.GetTService<DependencyA>();

            dependencyA.DoSomething();
        }
    }

    public static class ServiceLocator
    {
        private static Dictionary<Type, object> _container = new Dictionary<Type, object>();

        static ServiceLocator()
        {
            _container.Add(typeof(DependencyA), new DependencyA());
        }

        public static T GetTService<T>()
        {
           return  (T)_container[typeof(T)];
        }
    }

    public class DependencyA
    {
        public void DoSomething()
        {
            Console.WriteLine("Doing Something!");
        }
    }
}
